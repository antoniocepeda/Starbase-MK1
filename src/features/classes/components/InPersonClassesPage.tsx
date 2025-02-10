import React, { useState } from 'react';
import { Users, MapPin, Calendar, ArrowRight, Rocket, Gift } from 'lucide-react';
import { ProgramCard } from './ProgramCard';
import { FacilityCard } from './FacilityCard';
import { InstructorCard } from './InstructorCard';
import { PricingPlanCard } from './PricingPlanCard';
import { CLASS_PROGRAMS, FACILITIES, INSTRUCTORS, PRICING_PLANS } from '../constants';

export function InPersonClassesPage() {
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', phone: '' });
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setContactInfo({ name: '', email: '', phone: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1E2761] via-[#192657] to-[#7C162E] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-4 bg-[#FF4D00]/20 rounded-full mb-6">
              <Users className="w-8 h-8 text-[#FF4D00]" />
            </div>
            <h1 className="text-6xl font-black mb-6 text-white" style={{ textShadow: '4px 4px 0px #FF4D00' }}>
              Learn Robotics In Person
            </h1>
            <p className="text-xl text-[#FFC857] mb-8">
              Join our state-of-the-art facilities and learn from expert instructors
            </p>
            <div className="flex flex-wrap gap-6 justify-center mb-12">
              {[
                { icon: <MapPin className="w-6 h-6" />, text: "Multiple Locations" },
                { icon: <Users className="w-6 h-6" />, text: "Small Class Sizes" },
                { icon: <Calendar className="w-6 h-6" />, text: "Flexible Schedule" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-[#5D9FFF]">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowEnrollmentForm(true)}
                className="px-8 py-4 bg-[#FF4D00] hover:bg-[#FF6B00] rounded-lg font-black text-xl transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center gap-2"
                style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.3)' }}
              >
                Start Your Journey <Rocket className="w-6 h-6" />
              </button>
              <button
                className="px-8 py-4 bg-[#5D9FFF] hover:bg-[#4A8FFF] rounded-lg font-black text-xl transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center gap-2"
                style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.3)' }}
              >
                Get Free Trial <Gift className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Limited Time Offer Banner */}
      <div className="bg-[#FF4D00] py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-white font-bold text-lg">
            🚀 Special Launch Offer: Save 20% on all programs - Limited spots available!
          </p>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-black text-center mb-12 text-[#FFC857]" style={{ textShadow: '2px 2px 0px #FF4D00' }}>
          Choose Your Program
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <PricingPlanCard key={index} {...plan} />
          ))}
        </div>
      </div>

      {/* Class Programs */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-black text-center mb-12 text-[#FFC857]" style={{ textShadow: '2px 2px 0px #FF4D00' }}>
          Available Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLASS_PROGRAMS.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>

      {/* Our Facilities */}
      <div className="bg-[#1E2761]/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-12 text-[#FFC857]" style={{ textShadow: '2px 2px 0px #FF4D00' }}>
            World-Class Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FACILITIES.map((facility, index) => (
              <FacilityCard key={index} {...facility} />
            ))}
          </div>
        </div>
      </div>

      {/* Meet Our Instructors */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-black text-center mb-12 text-[#FFC857]" style={{ textShadow: '2px 2px 0px #FF4D00' }}>
          Expert Instructors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INSTRUCTORS.map((instructor, index) => (
            <InstructorCard key={index} {...instructor} />
          ))}
        </div>
      </div>

      {/* Enrollment Form */}
      {showEnrollmentForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-[#1E2761] rounded-xl p-8 border-4 border-[#FF4D00] max-w-2xl w-full">
            <h2 className="text-3xl font-black mb-6 text-[#FFC857]">Start Your Journey</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#5D9FFF] font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={contactInfo.name}
                  onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                  className="w-full px-6 py-4 rounded-lg bg-white text-black font-bold border-4 border-[#FF4D00] focus:border-[#5D9FFF] focus:ring-2 focus:ring-[#5D9FFF] outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#5D9FFF] font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                  className="w-full px-6 py-4 rounded-lg bg-white text-black font-bold border-4 border-[#FF4D00] focus:border-[#5D9FFF] focus:ring-2 focus:ring-[#5D9FFF] outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-[#5D9FFF] font-bold mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  value={contactInfo.phone}
                  onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                  className="w-full px-6 py-4 rounded-lg bg-white text-black font-bold border-4 border-[#FF4D00] focus:border-[#5D9FFF] focus:ring-2 focus:ring-[#5D9FFF] outline-none"
                  required
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 px-8 py-4 bg-[#FF4D00] hover:bg-[#FF6B00] rounded-lg font-black text-xl transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center gap-2"
                  style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.3)' }}
                >
                  Enroll Now <ArrowRight className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={() => setShowEnrollmentForm(false)}
                  className="px-8 py-4 bg-[#5D9FFF] hover:bg-[#4A8FFF] rounded-lg font-black text-xl transition-all duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Final CTA */}
      <div className="bg-[#FF4D00]/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-6 text-[#FFC857]" style={{ textShadow: '2px 2px 0px #FF4D00' }}>
            Ready to Start Your Space Journey?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Join thousands of students already learning robotics at our world-class facilities. Limited spots available for upcoming sessions!
          </p>
          <button
            onClick={() => setShowEnrollmentForm(true)}
            className="px-12 py-6 bg-[#FF4D00] hover:bg-[#FF6B00] rounded-lg font-black text-2xl transition-all duration-200 transform hover:scale-105 inline-flex items-center gap-3"
            style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.3)' }}
          >
            Secure Your Spot Now <Rocket className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
}