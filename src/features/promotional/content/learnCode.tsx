import React from 'react';

export const LearnCodeContent = (
  <div className="space-y-6 text-white">
    <div className="aspect-video rounded-lg overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?auto=format&fit=crop&q=80&w=1200"
        alt="Coding Interface"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-[#FFC857]">Master Robot Programming</h3>
      <p>Learn to program and control advanced robotic systems! Our comprehensive coding program includes:</p>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>Python and C++ for robotics</li>
        <li>Real-time control systems</li>
        <li>Sensor integration and processing</li>
        <li>Artificial Intelligence basics</li>
        <li>Computer vision programming</li>
      </ul>
      {/* ... Rest of the content ... */}
    </div>
  </div>
); 