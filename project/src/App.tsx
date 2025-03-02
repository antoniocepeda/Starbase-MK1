import React from 'react';
import backgroundImage from './assets/images/Background.jpg';
import { SubscriptionForm } from './features/subscription';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden text-white">
      {/* Local background image */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay to darken the image slightly */}
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img 
            src="https://images.unsplash.com/photo-1591382386627-349b692688ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
            alt="Gator Logo" 
            className="h-8 w-auto"
          />
          <span className="text-xl font-bold tracking-wider">STARBASE ACADEMY</span>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 px-6 pt-16 pb-24 md:pt-20 max-w-6xl mx-auto text-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Starbase Academy... Coming Soon!
          </h1>
          
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join us as we build the future generation of STEM...
          </p>
          
          <p className="text-lg md:text-xl mb-8 font-medium">
            Sign Up For Your Early Access Invite
          </p>
          
          {/* Email signup form - Using the new SubscriptionForm component */}
          <SubscriptionForm />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 mt-auto py-4 text-center text-sm text-gray-300">
        <div className="max-w-7xl mx-auto px-6">
          <p>&copy; 2025 Gator Treks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;