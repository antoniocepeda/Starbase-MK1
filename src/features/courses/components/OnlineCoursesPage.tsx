import React, { useState } from 'react';
import { Video, Play, BookOpen, Award, CheckCircle, Star, Users, Clock, ArrowRight } from 'lucide-react';
import { PricingTier } from './PricingTier';
import { CourseCard } from './CourseCard';
import { TestimonialCard } from './TestimonialCard';
import { COURSES, TESTIMONIALS, PRICING_TIERS } from '../constants';

export function OnlineCoursesPage() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle enrollment
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1E2761] via-[#192657] to-[#7C162E] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-4 bg-[#FF4D00]/20 rounded-full mb-6">
              <Video className="w-8 h-8 text-[#FF4D00]" />
            </div>
            <h1 className="text-6xl font-black mb-6 text-white" style={{ textShadow: '4px 4px 0px #FF4D00' }}>
              Master Space Robotics Online
            </h1>
            <p className="text-xl text-[#FFC857] mb-12">
              Learn from industry experts and build real robots from anywhere in the world
            </p>
            <div className="flex flex-wrap gap-6 justify-center mb-12">
              {[
                { icon: <Play className="w-6 h-6" />, text: "200+ Video Lessons" },
                { icon: <BookOpen className="w-6 h-6" />, text: "Comprehensive Curriculum" },
                { icon: <Award className="w-6 h-6" />, text: "Certification Included" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-[#5D9FFF]">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                required
                value={email}
                placeholder="Enter your email to get started"
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 rounded-lg bg-white text-black font-bold placeholder-gray-500 border-4 border-[#FF4D00] focus:border-[#5D9FFF] focus:ring-2 focus:ring-[#5D9FFF] outline-none"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-[#FF4D00] hover:bg-[#FF6B00] rounded-lg font-black text-xl transition-all duration-200 transform hover:scale-105 whitespace-nowrap"
                style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.3)' }}
              >
                Start Learning Now
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-black text-center mb-12 text-[#FFC857]" style={{ textShadow: '2px 2px 0px #FF4D00' }}>
          Featured Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-[#1E2761]/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-12 text-[#FFC857]" style={{ textShadow: '2px 2px 0px #FF4D00' }}>
            Why Choose Our Platform
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="w-12 h-12 text-[#FF4D00]" />,
                title: "Learn at Your Pace",
                description: "Access course materials 24/7 and learn on your own schedule"
              },
              {
                icon: <Star className="w-12 h-12 text-[#FF4D00]" />,
                title: "Expert Instructors",
                description: "Learn from experienced space robotics engineers and educators"
              },
              {
                icon: <Users className="w-12 h-12 text-[#FF4D00]" />,
                title: "Community Support",
                description: "Join a global community of space robotics enthusiasts"
              },
              {
                icon: <Clock className="w-12 h-12 text-[#FF4D00]" />,
                title: "Lifetime Access",
                description: "Get unlimited access to all course materials and updates"
              },
              {
                icon: <Award className="w-12 h-12 text-[#FF4D00]" />,
                title: "Certification",
                description: "Earn recognized certificates upon course completion"
              },
              {
                icon: <Video className="w-12 h-12 text-[#FF4D00]" />,
                title: "HD Video Content",
                description: "High-quality video lessons with practical demonstrations"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-[#1E2761] p-8 rounded-xl border-4 border-[#FF4D00] transform hover:scale-105 transition-all duration-200">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-[#5D9FFF]">{feature.title}</h3>
                <p className="text-[#FFC857]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-black text-center mb-12 text-[#FFC857]" style={{ textShadow: '2px 2px 0px #FF4D00' }}>
          Choose Your Learning Path
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PRICING_TIERS.map((tier, index) => (
            <PricingTier key={index} {...tier} />
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-[#1E2761]/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-12 text-[#FFC857]" style={{ textShadow: '2px 2px 0px #FF4D00' }}>
            Student Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6 text-[#FFC857]" style={{ textShadow: '2px 2px 0px #FF4D00' }}>
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white mb-8">
            Join thousands of students already learning space robotics online
          </p>
          <button
            className="px-8 py-4 bg-[#FF4D00] hover:bg-[#FF6B00] rounded-lg font-black text-xl transition-all duration-200 transform hover:scale-105 inline-flex items-center gap-2"
            style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.3)' }}
          >
            Enroll Now <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}