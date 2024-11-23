const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 5000;

// Replace with your new reCAPTCHA Secret Key
const RECAPTCHA_SECRET_KEY = '6LfF3IcqAAAAAGUg3kk6l4Sc_XMQGj6tWQw6xqcU';

app.use(bodyParser.json());

app.post('/api/recaptcha', async (req, res) => {
  const { token } = req.body;

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${token}`
    );

    const { success } = response.data;
    if (success) {
      res.json({ success: true, message: 'Verification successful' });
    } else {
      res.json({ success: false, message: 'Verification failed' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
