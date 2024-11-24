const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 5000; // Or any port you prefer

app.use(bodyParser.json());

// Your secret key
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

app.post('/api/verify-recaptcha', async (req, res) => {
  const { token } = req.body;

  try {
    // Send request to Google's verification endpoint
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${token}`
    );

    const data = response.data;
    
    if (data.success) {
      res.json({ success: true });
    } else {
      res.json({ success: false, errors: data['error-codes'] });
    }
  } catch (error) {
    res.status(500).json({ error: 'Verification failed.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
