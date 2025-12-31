// Netlify Function: Subscribe to MailerLite
// Securely handles newsletter and lead magnet signups

const MAILERLITE_API_URL = 'https://connect.mailerlite.com/api/subscribers';

// Group IDs from MailerLite
const GROUPS = {
  newsletter: '175195722960864384',      // Newsletter Subscribers
  leadMagnet: '175195632248554684'       // Holistic Habits Checklist
};

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // CORS headers for browser requests
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    const data = JSON.parse(event.body);
    const { email, firstName, formType } = data;

    // Validate email
    if (!email || !email.includes('@')) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Valid email is required' })
      };
    }

    // Determine which group(s) to add subscriber to
    let groupIds = [];

    if (formType === 'lead-magnet' || formType === 'popup') {
      // Lead magnet signups go to both groups (they get the checklist AND newsletter)
      groupIds = [GROUPS.leadMagnet, GROUPS.newsletter];
    } else {
      // Regular newsletter signups
      groupIds = [GROUPS.newsletter];
    }

    // Get API key from environment variable
    const apiKey = process.env.MAILERLITE_API_KEY;

    if (!apiKey) {
      console.error('MAILERLITE_API_KEY environment variable not set');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Server configuration error' })
      };
    }

    // Build subscriber data
    const subscriberData = {
      email: email.toLowerCase().trim(),
      groups: groupIds,
      status: 'active'
    };

    // Add first name if provided
    if (firstName && firstName.trim()) {
      subscriberData.fields = {
        name: firstName.trim()
      };
    }

    // Send to MailerLite
    const response = await fetch(MAILERLITE_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(subscriberData)
    });

    const result = await response.json();

    if (!response.ok) {
      // Handle MailerLite errors
      console.error('MailerLite error:', result);

      // Check for already subscribed (not really an error)
      if (response.status === 422 && result.message?.includes('already')) {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            success: true,
            message: 'You\'re already subscribed!'
          })
        };
      }

      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({
          error: result.message || 'Subscription failed',
          details: result.errors || null
        })
      };
    }

    // Success!
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: formType === 'lead-magnet' || formType === 'popup'
          ? 'Check your email for the Holistic Habits Checklist!'
          : 'Successfully subscribed to the newsletter!'
      })
    };

  } catch (error) {
    console.error('Subscribe function error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'An unexpected error occurred' })
    };
  }
};
