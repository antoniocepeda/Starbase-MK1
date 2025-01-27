import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Rocket, Laptop, Video, Github, Twitter, Linkedin } from 'lucide-react';
import ParticleBackground from './components/ParticleBackground';
import CountdownTimer from './components/CountdownTimer';
import FeatureCard from './components/FeatureCard';
import TestimonialCard from './components/TestimonialCard';
import BuildLaunch from './pages/BuildLaunch';
import VirtualCourses from './pages/VirtualCourses';
import LiveEvents from './pages/LiveEvents';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 font-['Orbitron'] glow-text">
            Launch Your Journey Into Space and STEM!
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Join the Starbase Academy and explore exclusive hands-on workshops and virtual STEM courses.
          </p>
          <div className="bg-black/30 backdrop-blur-md rounded-xl p-8 border border-[#00D4FF]/20 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-white/10 rounded-lg px-4 py-3 mb-4 border border-[#00D4FF]/30 focus:border-[#00D4FF] outline-none transition-colors"
            />
            <button className="w-full bg-[#FF6F00] hover:bg-[#FF8F00] transition-colors rounded-lg px-6 py-3 font-bold text-white">
              Sign Up Now!
            </button>
            <p className="mt-4 text-sm text-white/70">
              Get early access to exclusive STEM opportunities and updates
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-xl overflow-hidden mb-12">
            <img
              src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&w=1200&q=80"
              alt="Space Academy"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
              <div>
                <h2 className="text-4xl font-bold mb-4 font-['Orbitron']">What is Starbase Academy?</h2>
                <p className="text-lg max-w-2xl">
                  We're on a mission to inspire the next generation of STEM innovators through hands-on experience and expert guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-['Orbitron']">
            Explore the Academy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/build-launch">
              <FeatureCard
                Icon={Rocket}
                title="Build & Launch"
                description="Build and launch your own model rockets with expert guidance."
              />
            </Link>
            <Link to="/virtual-courses">
              <FeatureCard
                Icon={Laptop}
                title="Virtual Courses"
                description="Learn space systems engineering from industry experts."
              />
            </Link>
            <Link to="/live-events">
              <FeatureCard
                Icon={Video}
                title="Live Events"
                description="Join live guided streams and discussions of starship launches."
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 font-['Orbitron']">
            Next Workshop Begins In
          </h2>
          <CountdownTimer />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-['Orbitron']">
            Student Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Starbase Academy gave me the hands-on experience I needed to pursue engineering!"
              author="Alex M."
              rating={5}
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
            />
            <TestimonialCard
              quote="The virtual courses are incredible. I learned so much about space systems!"
              author="Sarah K."
              rating={5}
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
            />
            <TestimonialCard
              quote="Building my own rocket was an unforgettable experience. Thank you!"
              author="James L."
              rating={5}
              image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black/50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-['Orbitron']">Our Mission</h3>
              <p className="text-white/80">
                Empowering the next generation of space explorers through innovative STEM education.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 font-['Orbitron']">Quick Links</h3>
              <ul className="space-y-2 text-white/80">
                <li>
                  <Link to="/privacy-policy" className="hover:text-[#00D4FF]">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="hover:text-[#00D4FF]">Terms of Service</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 font-['Orbitron']">Connect</h3>
              <div className="flex gap-4">
                <a href="#" className="text-white/80 hover:text-[#00D4FF]">
                  <Github size={24} />
                </a>
                <a href="#" className="text-white/80 hover:text-[#00D4FF]">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-white/80 hover:text-[#00D4FF]">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-[#000000] to-[#1a1a2e] text-white">
        <ParticleBackground />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/build-launch" element={<BuildLaunch />} />
          <Route path="/virtual-courses" element={<VirtualCourses />} />
          <Route path="/live-events" element={<LiveEvents />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;