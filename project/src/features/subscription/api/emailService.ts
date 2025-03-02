import axios from 'axios';

/**
 * Validates an email address format
 * @param email - The email address to validate
 * @returns boolean indicating if the email is valid
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Subscribe an email address to the newsletter using Firebase Functions
 * @param email - The email address to subscribe
 * @returns Promise with the response data
 */
export const subscribeEmail = async (email: string): Promise<{ success: boolean; message: string }> => {
  try {
    // In development, use localhost. In production, it will use the deployed Firebase Functions URL
    const API_URL = process.env.NODE_ENV === 'production' 
      ? 'https://starbase-mk1.web.app/api'
      : 'http://localhost:5001/starbase-mk1/us-central1/api';
    
    // Validate email format
    if (!email || !isValidEmail(email)) {
      return { 
        success: false, 
        message: 'Invalid email address' 
      };
    }
    
    const response = await axios.post(`${API_URL}/subscribe`, { email });
    return response.data;
  } catch (error) {
    console.error('Error saving email:', error);
    return { 
      success: false, 
      message: 'An error occurred while subscribing. Please try again later.' 
    };
  }
};
