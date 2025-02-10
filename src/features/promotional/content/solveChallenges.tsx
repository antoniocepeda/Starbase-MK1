import React from 'react';

export const SolveChallengesContent = (
  <div className="space-y-6 text-white">
    <div className="aspect-video rounded-lg overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
        alt="Space Challenge"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-[#FFC857]">Space Engineering Missions</h3>
      <p>Take on real-world space engineering challenges! Our mission-based program features:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div className="bg-[#1E2761]/50 p-6 rounded-lg border-2 border-[#FF4D00]">
          <h4 className="text-xl font-bold text-[#5D9FFF] mb-3">Monthly Challenges</h4>
          <ul className="space-y-2 text-sm">
            <li>• Mars Sample Collection</li>
            <li>• Lunar Base Construction</li>
            <li>• Asteroid Mining Simulation</li>
            <li>• Space Debris Cleanup</li>
          </ul>
        </div>
        <div className="bg-[#1E2761]/50 p-6 rounded-lg border-2 border-[#FF4D00]">
          <h4 className="text-xl font-bold text-[#5D9FFF] mb-3">Team Projects</h4>
          <ul className="space-y-2 text-sm">
            <li>• Robot Design Sprints</li>
            <li>• Engineering Competitions</li>
            <li>• Innovation Workshops</li>
            <li>• Space Tech Hackathons</li>
          </ul>
        </div>
      </div>
      <div className="mt-6 bg-[#1E2761]/50 p-6 rounded-lg border-2 border-[#FF4D00]">
        <h4 className="text-xl font-bold text-[#5D9FFF] mb-3">Learning Outcomes</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ul className="space-y-2 text-sm">
            <li>✓ Problem-solving skills</li>
            <li>✓ Team collaboration</li>
            <li>✓ Project management</li>
          </ul>
          <ul className="space-y-2 text-sm">
            <li>✓ Critical thinking</li>
            <li>✓ Engineering design</li>
            <li>✓ Scientific method</li>
          </ul>
        </div>
      </div>
      <p className="text-[#5D9FFF] italic mt-6">
        * Join monthly competitions and win amazing prizes! All challenge materials provided.
      </p>
    </div>
  </div>
); 