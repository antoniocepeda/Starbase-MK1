import React from 'react';
import { Rocket, PenTool as Tool, Wind, CheckCircle } from 'lucide-react';

const BuildLaunch = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] to-[#1a1a2e] text-white pt-8">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative rounded-xl overflow-hidden mb-12">
          <img
            src="https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=1200&q=80"
            alt="Rocket Launch"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4 font-['Orbitron'] glow-text">
                Build & Launch Program
              </h1>
              <p className="text-xl max-w-2xl mx-auto text-white/90">
                Experience the thrill of building and launching your own model rocket under expert guidance.
              </p>
            </div>
          </div>
        </div>

        {/* Program Overview */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-['Orbitron'] mb-6">
              Program Overview
            </h2>
            <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-[#00D4FF]/20">
              <p className="text-white/90 leading-relaxed">
                Our comprehensive rocket building program takes you through every step of the process,
                from understanding basic rocket science to your first successful launch. You'll work
                with industry-standard materials and tools while learning from experienced aerospace
                engineers.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/30 backdrop-blur-md rounded-xl p-4 border border-[#00D4FF]/20">
                <h3 className="font-bold mb-2 text-[#00D4FF]">Duration</h3>
                <p className="text-white/80">8 Weeks</p>
              </div>
              <div className="bg-black/30 backdrop-blur-md rounded-xl p-4 border border-[#00D4FF]/20">
                <h3 className="font-bold mb-2 text-[#00D4FF]">Skill Level</h3>
                <p className="text-white/80">Beginner Friendly</p>
              </div>
            </div>
          </div>
          <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-[#00D4FF]/20">
            <h3 className="text-2xl font-bold font-['Orbitron'] mb-6">
              What You'll Learn
            </h3>
            <ul className="space-y-4">
              {[
                { icon: Rocket, text: "Fundamentals of rocket propulsion and aerodynamics" },
                { icon: Tool, text: "Hands-on experience with rocket construction and assembly" },
                { icon: Wind, text: "Weather conditions and launch calculations" },
                { icon: CheckCircle, text: "Safety protocols and launch procedures" },
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <item.icon className="text-[#00D4FF]" size={24} />
                  <span className="text-white/90">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Program Schedule */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-['Orbitron'] mb-8">
            Program Schedule
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                week: "Week 1-2",
                title: "Fundamentals",
                content: "Introduction to rocket science and safety protocols"
              },
              {
                week: "Week 3-4",
                title: "Design Phase",
                content: "CAD modeling and rocket design principles"
              },
              {
                week: "Week 5-6",
                title: "Construction",
                content: "Hands-on building and assembly of your rocket"
              },
              {
                week: "Week 7-8",
                title: "Launch Prep",
                content: "Final testing and supervised launch day"
              }
            ].map((phase, index) => (
              <div
                key={index}
                className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-[#00D4FF]/20 hover:border-[#00D4FF]/50 transition-all duration-300"
              >
                <div className="text-[#00D4FF] font-bold mb-2">{phase.week}</div>
                <h3 className="font-bold mb-2">{phase.title}</h3>
                <p className="text-white/80">{phase.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-16">
          <div className="bg-black/30 backdrop-blur-md rounded-xl p-8 border border-[#00D4FF]/20 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold font-['Orbitron'] mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/90 mb-6">
              Join our next cohort and build your first rocket. Limited spots available!
            </p>
            <button className="bg-[#FF6F00] hover:bg-[#FF8F00] transition-colors rounded-lg px-8 py-4 font-bold text-white">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildLaunch;