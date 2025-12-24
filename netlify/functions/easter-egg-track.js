// Easter Egg Tracker - Netlify Function
// Tracks total triggers and unique devices

const { getStore } = require("@netlify/blobs");

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST" && event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" })
    };
  }

  try {
    const store = getStore("easter-egg-stats");

    // GET request - return current stats (for developers)
    if (event.httpMethod === "GET") {
      const stats = await store.get("counts", { type: "json" }) || {
        totalTriggers: 0,
        uniqueDevices: 0,
        deviceIds: []
      };

      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
          totalTriggers: stats.totalTriggers,
          uniqueDevices: stats.uniqueDevices,
          lastUpdated: stats.lastUpdated
        })
      };
    }

    // POST request - record a trigger
    const body = JSON.parse(event.body || "{}");
    const deviceId = body.deviceId;

    if (!deviceId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "deviceId required" })
      };
    }

    // Get current stats
    let stats = await store.get("counts", { type: "json" }) || {
      totalTriggers: 0,
      uniqueDevices: 0,
      deviceIds: []
    };

    // Check if device is excluded (developers/testers)
    const isExcluded = deviceId.startsWith("exclude_");

    if (!isExcluded) {
      // Increment total triggers
      stats.totalTriggers += 1;

      // Check if this is a new device
      if (!stats.deviceIds.includes(deviceId)) {
        stats.deviceIds.push(deviceId);
        stats.uniqueDevices = stats.deviceIds.length;
      }

      stats.lastUpdated = new Date().toISOString();

      // Save updated stats
      await store.setJSON("counts", stats);
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        success: true,
        totalTriggers: stats.totalTriggers,
        uniqueDevices: stats.uniqueDevices
      })
    };

  } catch (error) {
    console.error("Easter egg tracker error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" })
    };
  }
};
