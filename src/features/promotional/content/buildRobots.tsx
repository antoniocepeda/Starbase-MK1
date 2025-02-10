import React from 'react';

export const BuildRobotsContent = (
  <div className="space-y-6 text-white">
    <div className="aspect-video rounded-lg overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200"
        alt="Robot Building"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-[#FFC857]">Build Your Own Space Robot</h3>
      <p>Get hands-on experience building real robots designed for space exploration! In our program, you'll:</p>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>Learn robot design principles</li>
        <li>Work with professional-grade components</li>
        <li>Build autonomous navigation systems</li>
        <li>Create robotic arms and grippers</li>
        <li>Test your robot in simulated space environments</li>
      </ul>
      <p className="text-[#5D9FFF] italic mt-6">
        * All equipment and materials provided. No prior experience needed!
      </p>
    </div>
  </div>
); 