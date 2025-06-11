import express, { Request, Response } from 'express';
import cors from 'cors';
import fetch from 'node-fetch'; // <-- add this
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL!;
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req: Request, res: Response) => {
  const { name, email, phone, subject, message } = req.body;
  try {
    const params = new URLSearchParams({ name, email, phone, subject, message });
    const gsResponse = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: params,
    });
    const text = await gsResponse.text();

    console.log('Contact form data:', { name, email, phone, subject, message });
    res.json({ status: 'success', message: 'Thank you! Our team will contact you shortly.', gsResponse: text });
  } catch (error) {
    console.error('Error forwarding to Google Sheets:', error);
    res.status(500).json({ status: 'error', message: 'Failed to store data in Google Sheets.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});