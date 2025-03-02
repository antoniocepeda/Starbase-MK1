import React, { useState } from 'react';
import { subscribeEmail, isValidEmail } from '../api/emailService';

interface SubscriptionFormProps {
  className?: string;
}

const SubscriptionForm: React.FC<SubscriptionFormProps> = ({ className = '' }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset states
    setError(null);
    setSuccess(null);
    
    // Validate email format
    if (!email || !isValidEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    try {
      setIsLoading(true);
      const response = await subscribeEmail(email);
      
      if (response.success) {
        setIsSubmitted(true);
        setSuccess('Thank you for signing up!');
        setEmail('');
      } else {
        setError(response.message || 'Failed to subscribe. Please try again.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again later.');
      console.error('Subscription error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`w-full max-w-md mx-auto ${className}`}>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="flex-grow px-4 py-3 bg-white text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            disabled={isLoading}
          />
          <button
            type="submit"
            className={`bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-md font-medium transition-colors whitespace-nowrap ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Notify Me'}
          </button>
        </form>
      ) : (
        <div className="bg-green-900 bg-opacity-30 border border-green-700 rounded-lg p-4 text-center">
          <p className="text-green-400 font-medium">{success || 'Thank you for signing up!'}</p>
          <p className="text-sm text-gray-300 mt-1">We'll keep you updated on our launch.</p>
        </div>
      )}
      
      {/* Error message */}
      {error && !isSubmitted && (
        <div className="mt-2 text-red-400 text-sm">
          {error}
        </div>
      )}
      
      <p className="text-sm mt-3 text-gray-200">
        We promise to never spam you.
      </p>
    </div>
  );
};

export default SubscriptionForm;
