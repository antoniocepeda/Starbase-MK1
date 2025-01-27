import React from 'react';
import { Code, Brain, Star, Award, Laptop, Users, BookOpen, Zap } from 'lucide-react';

const VirtualCourses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] to-[#1a1a2e] text-white pt-8">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative rounded-xl overflow-hidden mb-12">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
            alt="Space Technology"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4 font-['Orbitron'] glow-text">
                Virtual Space Courses
              </h1>
              <p className="text-xl max-w-2xl mx-auto text-white/90">
                Learn from industry experts and master space technology from anywhere in the world.
              </p>
            </div>
          </div>
        </div>

        {/* Course Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-['Orbitron'] mb-8 text-center">
            Available Courses
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Code,
                title: "Space Systems Programming",
                description: "Learn to program flight computers and control systems",
                duration: "12 weeks",
                level: "Intermediate"
              },
              {
                icon: Brain,
                title: "Orbital Mechanics",
                description: "Master the mathematics of spaceflight and orbital dynamics",
                duration: "10 weeks",
                level: "Advanced"
              },
              {
                icon: Star,
                title: "Introduction to Astronomy",
                description: "Explore the fundamentals of space science and celestial objects",
                duration: "8 weeks",
                level: "Beginner"
              },
              {
                icon: Award,
                title: "Space Mission Design",
                description: "Design complete space missions from concept to execution",
                duration: "14 weeks",
                level: "Advanced"
              }
            ].map((course, index) => (
              <div
                key={index}
                className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-[#00D4FF]/20 hover:border-[#00D4FF]/50 transition-all duration-300 group"
              >
                <course.icon className="text-[#00D4FF] mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-bold mb-2 font-['Orbitron']">{course.title}</h3>
                <p className="text-white/80 mb-4">{course.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#00D4FF]">{course.duration}</span>
                  <span className="bg-[#FF6F00]/20 text-[#FF6F00] px-3 py-1 rounded-full text-sm">
                    {course.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-['Orbitron'] mb-8 text-center">
            Why Choose Our Virtual Courses?
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Laptop,
                title: "Learn Anywhere",
                description: "Access courses from any device, anywhere in the world"
              },
              {
                icon: Users,
                title: "Expert Instructors",
                description: "Learn from active aerospace professionals"
              },
              {
                icon: BookOpen,
                title: "Hands-on Projects",
                description: "Apply your knowledge with practical assignments"
              },
              {
                icon: Zap,
                title: "Live Sessions",
                description: "Interactive Q&A and problem-solving sessions"
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
              Start Learning Today
            </h2>
            <p className="text-white/90 mb-6">
              Enroll in our virtual courses and begin your journey into space technology.
            </p>
            <button className="bg-[#FF6F00] hover:bg-[#FF8F00] transition-colors rounded-lg px-8 py-4 font-bold text-white">
              Browse All Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualCourses;