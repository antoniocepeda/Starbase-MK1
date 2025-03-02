import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email validation function
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Path to store emails
const emailsFilePath = path.join(__dirname, 'emails.txt');

// Endpoint to save email
app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;
  
  // Validate email
  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email address' });
  }
  
  try {
    // Append email to file with timestamp
    const timestamp = new Date().toISOString();
    const emailEntry = `${email},${timestamp}\n`;
    
    fs.appendFileSync(emailsFilePath, emailEntry);
    
    return res.status(200).json({ 
      success: true, 
      message: 'Email saved successfully' 
    });
  } catch (error) {
    console.error('Error saving email:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to save email' 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
