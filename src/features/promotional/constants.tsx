import React from 'react';

export const PROMOTIONAL_CONTENT = {
  BUILD_ROBOTS: {
    title: "BUILD SPACE ROBOTS",
    modalContent: (
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
    )
  },
  LEARN_CODE: {
    title: "LEARN TO CODE",
    modalContent: (
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
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#1E2761]/50 p-4 rounded-lg border-2 border-[#FF4D00]">
              <h4 className="text-lg font-bold text-[#5D9FFF] mb-2">Beginner Track</h4>
              <p className="text-sm">Start with block-based programming and gradually transition to text-based code</p>
            </div>
            <div className="bg-[#1E2761]/50 p-4 rounded-lg border-2 border-[#FF4D00]">
              <h4 className="text-lg font-bold text-[#5D9FFF] mb-2">Advanced Track</h4>
              <p className="text-sm">Dive deep into complex algorithms and autonomous system development</p>
            </div>
          </div>
          <p className="text-[#5D9FFF] italic mt-6">
            * All learning materials and development tools included. Choose your skill level!
          </p>
        </div>
      </div>
    )
  },
  SOLVE_CHALLENGES: {
    title: "SOLVE CHALLENGES",
    modalContent: (
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
    )
  },
  ROVER_DESIGN: {
    title: "ROVER DESIGN",
    modalContent: (
      <div className="space-y-6 text-white">
        <div className="aspect-video rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=1200"
            alt="Mars Rover"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-[#FFC857]">Mars Rover Engineering Program</h3>
          <p>Design, build, and operate your own Mars exploration vehicle! Our comprehensive rover program includes:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1E2761]/50 p-6 rounded-lg border-2 border-[#FF4D00]">
              <h4 className="text-xl font-bold text-[#5D9FFF] mb-3">Design Phase</h4>
              <ul className="space-y-2">
                <li>• 3D modeling and prototyping</li>
                <li>• Terrain analysis systems</li>
                <li>• Power management design</li>
                <li>• Sensor array planning</li>
              </ul>
            </div>
            <div className="bg-[#1E2761]/50 p-6 rounded-lg border-2 border-[#FF4D00]">
              <h4 className="text-xl font-bold text-[#5D9FFF] mb-3">Build Phase</h4>
              <ul className="space-y-2">
                <li>• Component assembly</li>
                <li>• Motor integration</li>
                <li>• Sensor installation</li>
                <li>• Testing procedures</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-[#1E2761]/50 p-6 rounded-lg border-2 border-[#FF4D00]">
            <h4 className="text-xl font-bold text-[#5D9FFF] mb-3">Advanced Features</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h5 className="text-lg font-bold text-[#FFC857] mb-2">Navigation</h5>
                <ul className="space-y-1 text-sm">
                  <li>✓ GPS mapping</li>
                  <li>✓ Obstacle avoidance</li>
                  <li>✓ Path planning</li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-bold text-[#FFC857] mb-2">Operations</h5>
                <ul className="space-y-1 text-sm">
                  <li>✓ Sample collection</li>
                  <li>✓ Data transmission</li>
                  <li>✓ Remote control</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-[#FF4D00]/20 rounded-lg border-2 border-[#FF4D00] text-center">
            <p className="font-bold text-[#FFC857]">🚀 Final Challenge: Mars Mission Simulation</p>
            <p className="text-sm mt-2">Test your rover in our Mars-like terrain park with real mission objectives!</p>
          </div>

          <p className="text-[#5D9FFF] italic mt-6">
            * All necessary equipment and materials provided. Join our next rover engineering cohort today!
          </p>
        </div>
      </div>
    )
  },
  ROBOT_OLYMPICS: {
    title: "ROBOT OLYMPICS",
    modalContent: (
      <div className="space-y-6 text-white">
        <div className="aspect-video rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=1200"
            alt="Robot Competition"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-[#FFC857]">Space Robotics Competition</h3>
          <p>Join the most exciting robotics competition in the galaxy! Compete in various challenges and showcase your engineering skills.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1E2761]/50 p-6 rounded-lg border-2 border-[#FF4D00]">
              <h4 className="text-xl font-bold text-[#5D9FFF] mb-3">Competition Events</h4>
              <ul className="space-y-2">
                <li>🏃 Robot Sprint Race</li>
                <li>🏋️ Heavy Lifting Challenge</li>
                <li>🎯 Precision Control Test</li>
                <li>🧩 Problem Solving Tasks</li>
              </ul>
            </div>
            <div className="bg-[#1E2761]/50 p-6 rounded-lg border-2 border-[#FF4D00]">
              <h4 className="text-xl font-bold text-[#5D9FFF] mb-3">Special Missions</h4>
              <ul className="space-y-2">
                <li>🚀 Space Rescue Operation</li>
                <li>🌑 Lunar Construction Race</li>
                <li>☄️ Asteroid Mining Challenge</li>
                <li>🛸 Zero-G Navigation</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-[#1E2761]/50 p-6 rounded-lg border-2 border-[#FF4D00]">
            <h4 className="text-xl font-bold text-[#5D9FFF] mb-3">Competition Categories</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-[#1E2761]/50 rounded-lg border border-[#FF4D00]">
                <h5 className="text-lg font-bold text-[#FFC857] mb-2">Junior</h5>
                <p className="text-sm">Ages 8-12</p>
                <p className="text-xs mt-2">Basic robotics challenges</p>
              </div>
              <div className="text-center p-4 bg-[#1E2761]/50 rounded-lg border border-[#FF4D00]">
                <h5 className="text-lg font-bold text-[#FFC857] mb-2">Teen</h5>
                <p className="text-sm">Ages 13-16</p>
                <p className="text-xs mt-2">Intermediate missions</p>
              </div>
              <div className="text-center p-4 bg-[#1E2761]/50 rounded-lg border border-[#FF4D00]">
                <h5 className="text-lg font-bold text-[#FFC857] mb-2">Senior</h5>
                <p className="text-sm">Ages 17-19</p>
                <p className="text-xs mt-2">Advanced challenges</p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1E2761]/50 p-6 rounded-lg border-2 border-[#FF4D00]">
              <h4 className="text-xl font-bold text-[#5D9FFF] mb-3">Prizes</h4>
              <ul className="space-y-2">
                <li>🏆 Championship Trophy</li>
                <li>🎖️ Category Medals</li>
                <li>🤖 Robot Kit Packages</li>
                <li>🎓 Training Scholarships</li>
              </ul>
            </div>
            <div className="bg-[#1E2761]/50 p-6 rounded-lg border-2 border-[#FF4D00]">
              <h4 className="text-xl font-bold text-[#5D9FFF] mb-3">Benefits</h4>
              <ul className="space-y-2">
                <li>👥 Team Building Skills</li>
                <li>🧠 Strategic Thinking</li>
                <li>⚡ Real-time Problem Solving</li>
                <li>🌟 Competition Experience</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-[#FF4D00]/20 rounded-lg border-2 border-[#FF4D00] text-center">
            <p className="font-bold text-[#FFC857]">🎮 BONUS: Virtual Training Simulator</p>
            <p className="text-sm mt-2">Practice your skills in our state-of-the-art virtual training environment!</p>
          </div>

          <p className="text-[#5D9FFF] italic mt-6">
            * Registration includes all competition materials, team uniforms, and access to practice facilities.
          </p>
        </div>
      </div>
    )
  },
  SPACE_TECH: {
    title: "SPACE TECH",
    modalContent: (
      <div className="space-y-6 text-white">
        <div className="aspect-video rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=1200"
            alt="Space Technology Lab"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-[#FFC857]">Advanced Space Technology Lab</h3>
          <p>Get hands-on experience with cutting-edge space technology and equipment used in real space missions!</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1E2761]/50 p-6 rounded-lg border-2 border-[#FF4D00]">
              <h4 className="text-xl font-bold text-[#5D9FFF] mb-3">Equipment Access</h4>
              <ul className="space-y-2">
                <li>🛰️ Satellite Communication Systems</li>
                <li>🔭 Advanced Telescopes</li>
                <li>🖨️ 3D Printing Lab</li>
                <li>🎮 Mission Control Simulators</li>
              </ul>
            </div>
            <div className="bg-[#1E2761]/50 p-6 rounded-lg border-2 border-[#FF4D00]">
              <h4 className="text-xl font-bold text-[#5D9FFF] mb-3">Technology Areas</h4>
              <ul className="space-y-2">
                <li>📡 Space Communications</li>
                <li>🔋 Power Systems</li>
                <li>🌡️ Environmental Controls</li>
                <li>🚀 Propulsion Technology</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-[#1E2761]/50 p-6 rounded-lg border-2 border-[#FF4D00]">
            <h4 className="text-xl font-bold text-[#5D9FFF] mb-3">Hands-on Projects</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h5 className="text-lg font-bold text-[#FFC857] mb-2">Space Habitat Design</h5>
                <ul className="space-y-1 text-sm">
                  <li>• Life Support Systems</li>
                  <li>• Radiation Protection</li>
                  <li>• Resource Recycling</li>
                  <li>• Emergency Protocols</li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-bold text-[#FFC857] mb-2">Mission Operations</h5>
                <ul className="space-y-1 text-sm">
                  <li>• Flight Control</li>
                  <li>• Data Analysis</li>
                  <li>• System Monitoring</li>
                  <li>• Emergency Response</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#1E2761]/50 p-4 rounded-lg border-2 border-[#FF4D00]">
              <h5 className="text-lg font-bold text-[#5D9FFF] mb-2">Virtual Reality</h5>
              <p className="text-sm">Experience space walks and repairs in our VR training facility</p>
            </div>
            <div className="bg-[#1E2761]/50 p-4 rounded-lg border-2 border-[#FF4D00]">
              <h5 className="text-lg font-bold text-[#5D9FFF] mb-2">Mission Control</h5>
              <p className="text-sm">Run simulated space missions from our control center</p>
            </div>
            <div className="bg-[#1E2761]/50 p-4 rounded-lg border-2 border-[#FF4D00]">
              <h5 className="text-lg font-bold text-[#5D9FFF] mb-2">Research Lab</h5>
              <p className="text-sm">Conduct experiments with space-grade equipment</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-[#FF4D00]/20 rounded-lg border-2 border-[#FF4D00]">
            <h4 className="text-xl font-bold text-[#5D9FFF] mb-3">Special Features</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">👨‍🚀</span>
                <span>Mentoring from Space Industry Experts</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🏢</span>
                <span>Industry Partner Site Visits</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">📝</span>
                <span>Research Project Opportunities</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🎓</span>
                <span>College Credit Available</span>
              </div>
            </div>
          </div>

          <p className="text-[#5D9FFF] italic mt-6">
            * All equipment and safety gear provided. Join us to explore the future of space technology!
          </p>
        </div>
      </div>
    )
  }
} as const;