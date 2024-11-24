const functions = require("firebase-functions");
const axios = require("axios");

// Load environment variables
const RECAPTCHA_SECRET_KEY = functions.config().recaptcha.secret;

// Define the Cloud Function
exports.verifyRecaptcha = functions.https.onRequest(async (req, res) => {
  // Allow POST requests only
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const {token} = req.body;

  try {
    // Send request to Google's verification endpoint
    const response = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
    );

    const data = response.data;

    if (data.success) {
      res.json({success: true});
    } else {
      res.json({success: false, errors: data["error-codes"]});
    }
  } catch (error) {
    console.error("Verification failed", error);
    res.status(500).json({error: "Verification failed."});
  }
});
