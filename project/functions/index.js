const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');

admin.initializeApp();
const db = admin.firestore();

const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// Email validation function
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Subscribe endpoint
app.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;
    
    // Validate email
    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid email address' 
      });
    }
    
    // Add email to Firestore
    await db.collection('emails').add({
      email,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });
    
    return res.status(200).json({ 
      success: true, 
      message: 'Email saved successfully' 
    });
  } catch (error) {
    console.error('Error saving email:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'An error occurred while subscribing. Please try again later.' 
    });
  }
});

// Export the API as a Firebase Function
exports.api = functions.https.onRequest(app);
