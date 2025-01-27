import React from 'react';
import { Rocket, Calendar, Clock, Users, Video, MessageSquare, Globe, Podcast } from 'lucide-react';

const LiveEvents = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] to-[#1a1a2e] text-white pt-8">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative rounded-xl overflow-hidden mb-12">
          <img
            src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1200&q=80"
            alt="Mission Control"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4 font-['Orbitron'] glow-text">
                Live Space Events
              </h1>
              <p className="text-xl max-w-2xl mx-auto text-white/90">
                Experience historic space launches and discoveries in real-time with expert commentary.
              </p>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-['Orbitron'] mb-8 text-center">
            Upcoming Live Events
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Rocket,
                title: "Starship Launch",
                date: "March 25, 2024",
                time: "10:00 AM EST",
                description: "Watch the next-generation spacecraft test flight with live expert commentary",
                attendees: "2.5k registered"
              },
              {
                icon: Globe,
                title: "ISS Live Tour",
                date: "March 28, 2024",
                time: "2:00 PM EST",
                description: "Virtual tour of the International Space Station with astronaut guide",
                attendees: "1.8k registered"
              },
              {
                icon: Video,
                title: "Mars Rover Update",
                date: "April 2, 2024",
                time: "3:30 PM EST",
                description: "Latest discoveries and mission updates from the Perseverance rover team",
                attendees: "1.2k registered"
              },
              {
                icon: Podcast,
                title: "Space Telescope Reveal",
                date: "April 5, 2024",
                time: "11:00 AM EST",
                description: "First images reveal from the newest space telescope with astronomy experts",
                attendees: "3.1k registered"
              }
            ].map((event, index) => (
              <div
                key={index}
                className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-[#00D4FF]/20 hover:border-[#00D4FF]/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <event.icon className="text-[#00D4FF] group-hover:scale-110 transition-transform" size={32} />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 font-['Orbitron']">{event.title}</h3>
                    <div className="flex items-center gap-2 text-white/80 mb-2">
                      <Calendar size={16} />
                      <span>{event.date}</span>
                      <Clock size={16} className="ml-4" />
                      <span>{event.time}</span>
                    </div>
                    <p className="text-white/80 mb-4">{event.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-2 text-[#00D4FF]">
                        <Users size={16} />
                        {event.attendees}
                      </span>
                      <button className="bg-[#FF6F00] hover:bg-[#FF8F00] transition-colors rounded-lg px-4 py-2 text-white">
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-['Orbitron'] mb-8 text-center">
            Event Experience
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Video,
                title: "HD Livestream",
                description: "Crystal clear video feed with multiple camera angles"
              },
              {
                icon: MessageSquare,
                title: "Live Q&A",
                description: "Interact with experts during the event"
              },
              {
                icon: Users,
                title: "Community Chat",
                description: "Connect with fellow space enthusiasts"
              },
              {
                icon: Globe,
                title: "Global Access",
                description: "Join from anywhere in the world"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-[#00D4FF]/20 text-center"
              >
                <feature.icon className="text-[#00D4FF] mx-auto mb-4" size={32} />
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-16">
          <div className="bg-black/30 backdrop-blur-md rounded-xl p-8 border border-[#00D4FF]/20 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold font-['Orbitron'] mb-4">
              Never Miss a Launch
            </h2>
            <p className="text-white/90 mb-6">
              Sign up for event notifications and join our space exploration community.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 rounded-lg px-4 py-3 border border-[#00D4FF]/30 focus:border-[#00D4FF] outline-none transition-colors"
              />
              <button className="bg-[#FF6F00] hover:bg-[#FF8F00] transition-colors rounded-lg px-6 py-3 font-bold text-white whitespace-nowrap">
                Get Notified
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveEvents;