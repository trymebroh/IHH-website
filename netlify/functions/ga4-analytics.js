// Netlify Function: GA4 Analytics Data
// Fetches analytics data from Google Analytics 4 API

const crypto = require('crypto');
const https = require('https');

// GA4 Property ID
const GA4_PROPERTY_ID = '517511231';

// Create JWT for Google API authentication
function createJWT(credentials) {
  const header = {
    alg: 'RS256',
    typ: 'JWT'
  };

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: credentials.client_email,
    scope: 'https://www.googleapis.com/auth/analytics.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600
  };

  const base64Header = Buffer.from(JSON.stringify(header)).toString('base64url');
  const base64Payload = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const signatureInput = `${base64Header}.${base64Payload}`;

  const sign = crypto.createSign('RSA-SHA256');
  sign.update(signatureInput);
  const signature = sign.sign(credentials.private_key, 'base64url');

  return `${signatureInput}.${signature}`;
}

// Get access token from Google
async function getAccessToken(credentials) {
  const jwt = createJWT(credentials);

  return new Promise((resolve, reject) => {
    const postData = new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt
    }).toString();

    const options = {
      hostname: 'oauth2.googleapis.com',
      path: '/token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.access_token) {
            resolve(parsed.access_token);
          } else {
            reject(new Error(parsed.error_description || 'Failed to get access token'));
          }
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

// Call GA4 Data API
async function fetchGA4Data(accessToken, reportType = 'overview', dateRange = '30') {
  const startDate = `${dateRange}daysAgo`;
  const endDate = 'today';

  // Different report configurations
  const reports = {
    overview: {
      dateRanges: [{ startDate, endDate }],
      metrics: [
        { name: 'activeUsers' },
        { name: 'sessions' },
        { name: 'screenPageViews' },
        { name: 'bounceRate' },
        { name: 'averageSessionDuration' }
      ]
    },
    pages: {
      dateRanges: [{ startDate, endDate }],
      dimensions: [{ name: 'pagePath' }],
      metrics: [
        { name: 'screenPageViews' },
        { name: 'activeUsers' }
      ],
      orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
      limit: 20
    },
    sources: {
      dateRanges: [{ startDate, endDate }],
      dimensions: [{ name: 'sessionSource' }],
      metrics: [
        { name: 'sessions' },
        { name: 'activeUsers' }
      ],
      orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
      limit: 10
    },
    events: {
      dateRanges: [{ startDate, endDate }],
      dimensions: [{ name: 'eventName' }],
      metrics: [
        { name: 'eventCount' }
      ],
      orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }],
      limit: 20
    },
    daily: {
      dateRanges: [{ startDate, endDate }],
      dimensions: [{ name: 'date' }],
      metrics: [
        { name: 'activeUsers' },
        { name: 'sessions' },
        { name: 'screenPageViews' }
      ],
      orderBys: [{ dimension: { dimensionName: 'date' }, desc: false }]
    }
  };

  const requestBody = reports[reportType] || reports.overview;

  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(requestBody);

    const options = {
      hostname: 'analyticsdata.googleapis.com',
      path: `/v1beta/properties/${GA4_PROPERTY_ID}:runReport`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.error) {
            reject(new Error(parsed.error.message));
          } else {
            resolve(parsed);
          }
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

// Format the response for readability
function formatReport(rawData, reportType) {
  if (!rawData.rows) {
    return { message: 'No data available for this period', rows: [] };
  }

  const metrics = rawData.metricHeaders?.map(h => h.name) || [];
  const dimensions = rawData.dimensionHeaders?.map(h => h.name) || [];

  const rows = rawData.rows.map(row => {
    const formatted = {};

    dimensions.forEach((dim, i) => {
      formatted[dim] = row.dimensionValues?.[i]?.value;
    });

    metrics.forEach((metric, i) => {
      let value = row.metricValues?.[i]?.value;
      // Format specific metrics
      if (metric === 'bounceRate') {
        value = (parseFloat(value) * 100).toFixed(1) + '%';
      } else if (metric === 'averageSessionDuration') {
        const seconds = parseFloat(value);
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        value = `${mins}m ${secs}s`;
      } else if (!isNaN(value)) {
        value = parseInt(value).toLocaleString();
      }
      formatted[metric] = value;
    });

    return formatted;
  });

  return {
    reportType,
    rowCount: rawData.rowCount,
    rows
  };
}

exports.handler = async (event, context) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Get credentials from environment
    const credentialsJson = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;
    if (!credentialsJson) {
      throw new Error('GA4 credentials not configured');
    }

    const credentials = JSON.parse(credentialsJson);

    // Get query parameters
    const params = event.queryStringParameters || {};
    const reportType = params.report || 'overview';
    const dateRange = params.days || '30';

    // Authenticate and fetch data
    const accessToken = await getAccessToken(credentials);
    const rawData = await fetchGA4Data(accessToken, reportType, dateRange);
    const formattedData = formatReport(rawData, reportType);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        property: GA4_PROPERTY_ID,
        dateRange: `Last ${dateRange} days`,
        ...formattedData
      }, null, 2)
    };

  } catch (error) {
    console.error('GA4 API Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Failed to fetch analytics data',
        message: error.message
      })
    };
  }
};
