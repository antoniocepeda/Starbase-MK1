import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

/**
 * Subscribe an email address to the newsletter
 * @param email - The email address to subscribe
 * @returns Promise with the response data
 */
export const subscribeEmail = async (email: string): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await axios.post(`${API_URL}/subscribe`, { email });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data;
    }
    return { 
      success: false, 
      message: 'An error occurred while subscribing. Please try again later.' 
    };
  }
};

/**
 * Validates an email address format
 * @param email - The email address to validate
 * @returns boolean indicating if the email is valid
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
