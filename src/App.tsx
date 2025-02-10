import React, { useState, useEffect, useRef } from 'react';
import { Stars, Sparkles, Notebook as Robot, Wrench, Cpu, Video, Users, Box } from 'lucide-react';
import { RotatingTagline } from './features/tagline/components/RotatingTagline';
import { PromotionalModal } from './features/promotional/components/PromotionalModal';
import { OnlineCoursesPage } from './features/courses/components/OnlineCoursesPage';
import { InPersonClassesPage } from './features/classes/components/InPersonClassesPage';
import { RobotKitsPage } from './features/kits/components/RobotKitsPage';
import { PROMOTIONAL_CONTENT } from './features/promotional/constants';

// App Component v1.0.0 - Initial Firebase Deployment
function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [activeModal, setActiveModal] = useState<keyof typeof PROMOTIONAL_CONTENT | null>(null);
  const [showOnlineCourses, setShowOnlineCourses] = useState(false);
  const [showInPersonClasses, setShowInPersonClasses] = useState(false);
  const [showRobotKits, setShowRobotKits] = useState(false);

  const roboticsRef = useRef<HTMLDivElement>(null);
  const objectivesRef = useRef<HTMLDivElement>(null);
  const learningOptionsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    [roboticsRef, objectivesRef, learningOptionsRef, footerRef].forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  if (showOnlineCourses) {
    return <OnlineCoursesPage />;
  }

  if (showInPersonClasses) {
    return <InPersonClassesPage />;
  }

  if (showRobotKits) {
    return <RobotKitsPage />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1E2761] via-[#192657] to-[#7C162E] text-white relative overflow-hidden">
      {/* Geometric background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#FF4D00] to-transparent opacity-20" />
        <div className="absolute bottom-0 left-0 w-full h-1/2">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iI0ZGNEQwMCIgZmlsbC1vcGFjaXR5PSIwLjIiLz48L3N2Zz4=')] bg-repeat opacity-30" />
        </div>
      </div>

      {/* Stars */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4"><Stars className="w-8 h-8 text-[#FF8938] opacity-70 animate-pulse" /></div>
        <div className="absolute top-1/3 right-1/4"><Stars className="w-6 h-6 text-[#5D9FFF] opacity-60 animate-pulse" /></div>
        <div className="absolute bottom-1/4 left-1/3"><Stars className="w-10 h-10 text-[#FF4D00] opacity-50 animate-pulse" /></div>
        <div className="absolute top-1/2 right-1/3"><Sparkles className="w-8 h-8 text-[#FFC857] opacity-80 animate-pulse" /></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12 relative">
        {/* Hero section - Always visible */}
        <div className="flex flex-col items-center justify-center min-h-[100vh] text-center">
          <div className="space-y-8 max-w-4xl">
            {/* Logo and title */}
            <div className="flex items-center justify-center space-x-6 mb-12">
              <Robot className="w-16 h-16 text-[#FF4D00] transform -rotate-12" />
              <h1 className="text-7xl font-black tracking-tight text-white transform skew-x-6 drop-shadow-[0_0_25px_rgba(255,77,0,0.5)]" style={{ textShadow: '4px 4px 0px #FF4D00' }}>
                STARBASE ACADEMY
              </h1>
            </div>

            {/* Rotating tagline */}
            <RotatingTagline />

            {/* Subheading */}
            <p className="text-2xl text-[#FFC857] font-bold max-w-2xl mx-auto transform skew-x-6">
              K-12 STUDENTS! You could:
            </p>

            {/* Feature boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                "BUILD SPACE ROBOTS",
                "CONTROL REAL ROVERS",
                "JOIN ROBOTICS TEAM"
              ].map((text, index) => (
                <div
                  key={index}
                  className="bg-[#FF4D00] p-4 rounded-lg transform hover:scale-105 transition-transform duration-200 font-bold text-xl"
                  style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.3)' }}
                >
                  {text}
                </div>
              ))}
            </div>

            {/* Email signup form */}
            <div className="mt-12 max-w-xl mx-auto w-full transform -skew-x-6">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    required
                    value={email}
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-6 py-4 rounded-lg bg-white text-black font-bold placeholder-gray-500 border-4 border-[#FF4D00] focus:border-[#5D9FFF] focus:ring-2 focus:ring-[#5D9FFF] outline-none transition-all text-lg"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-[#FF4D00] hover:bg-[#FF6B00] rounded-lg font-black text-xl transition-colors duration-200 whitespace-nowrap transform hover:scale-105"
                    style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.3)' }}
                  >
                    START BUILDING!
                  </button>
                </form>
              ) : (
                <div className="text-center p-6 rounded-lg bg-[#FF4D00] border-4 border-[#5D9FFF]">
                  <p className="text-2xl font-black" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.3)' }}>
                    🤖 WELCOME TO THE ROBOTICS TEAM!
                  </p>
                </div>
              )}
              <p className="text-sm text-[#5D9FFF] mt-4 text-center skew-x-6">
                Get ready to build amazing robots and explore space technology!
              </p>
            </div>
          </div>
        </div>

        {/* Robotics Showcase - Fades in on scroll */}
        <div 
          ref={roboticsRef}
          className="mt-20 max-w-6xl mx-auto opacity-0 translate-y-10 transition-all duration-1000"
        >
          <h3 className="text-4xl font-black text-[#FFC857] mb-12 text-center transform -skew-x-6" style={{ textShadow: '2px 2px 0px #FF4D00' }}>
            HANDS-ON ROBOTICS PROGRAM
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Robot className="w-12 h-12" />,
                title: "BUILD ROBOTS",
                description: "Design and construct your own space exploration robots",
                modalKey: 'BUILD_ROBOTS' as const
              },
              {
                icon: <Cpu className="w-12 h-12" />,
                title: "LEARN TO CODE",
                description: "Program autonomous systems and robot controls",
                modalKey: 'LEARN_CODE' as const
              },
              {
                icon: <Wrench className="w-12 h-12" />,
                title: "SOLVE CHALLENGES",
                description: "Complete real space engineering missions",
                modalKey: 'SOLVE_CHALLENGES' as const
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-[#1E2761] p-8 rounded-xl border-4 border-[#FF4D00] transform hover:scale-105 transition-transform duration-200 ${
                  item.modalKey ? 'cursor-pointer' : ''
                }`}
                onClick={() => item.modalKey && setActiveModal(item.modalKey)}
              >
                <div className="text-[#FF4D00] mb-4">{item.icon}</div>
                <h4 className="text-2xl font-black mb-3 text-[#5D9FFF]">{item.title}</h4>
                <p className="text-[#FFC857]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission objectives - Fades in on scroll */}
        <div 
          ref={objectivesRef}
          className="mt-20 max-w-6xl mx-auto bg-white/5 rounded-2xl p-8 border-4 border-[#FF4D00] opacity-0 translate-y-10 transition-all duration-1000"
        >
          <h3 className="text-3xl font-black text-[#FFC857] mb-6 text-center transform -skew-x-6" style={{ textShadow: '2px 2px 0px #FF4D00' }}>
            ENGINEERING CHALLENGES:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "ROVER DESIGN",
                description: "Build and program Mars exploration vehicles",
                icon: "🤖",
                modalKey: 'ROVER_DESIGN' as const
              },
              {
                title: "ROBOT OLYMPICS",
                description: "Compete in space robotics challenges",
                icon: "🏆",
                modalKey: 'ROBOT_OLYMPICS' as const
              },
              {
                title: "SPACE TECH",
                description: "Work with advanced robotics equipment",
                icon: "🛠️",
                modalKey: 'SPACE_TECH' as const
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg bg-[#1E2761] border-2 border-[#FF4D00] transform hover:scale-105 transition-transform duration-200 ${
                  feature.modalKey ? 'cursor-pointer' : ''
                }`}
                onClick={() => feature.modalKey && setActiveModal(feature.modalKey)}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-black mb-2 text-[#5D9FFF]">{feature.title}</h3>
                <p className="text-[#FFC857]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning options - Fades in on scroll */}
        <div 
          ref={learningOptionsRef}
          className="mt-20 max-w-6xl mx-auto opacity-0 translate-y-10 transition-all duration-1000"
        >
          <h3 className="text-4xl font-black text-[#FFC857] mb-12 text-center transform -skew-x-6" style={{ textShadow: '2px 2px 0px #FF4D00' }}>
            CHOOSE YOUR PATH
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div 
              className="bg-[#1E2761] p-6 rounded-xl border-4 border-[#FF4D00] transform hover:scale-105 transition-transform duration-200 cursor-pointer"
              onClick={() => setShowOnlineCourses(true)}
            >
              <Video className="w-12 h-12 text-[#FF4D00] mb-4" />
              <h4 className="text-2xl font-black mb-3 text-[#5D9FFF]">ONLINE COURSES</h4>
              <p className="text-[#FFC857]">Learn robotics from anywhere with our interactive online platform</p>
            </div>
            <div 
              className="bg-[#1E2761] p-6 rounded-xl border-4 border-[#FF4D00] transform hover:scale-105 transition-transform duration-200 cursor-pointer"
              onClick={() => setShowInPersonClasses(true)}
            >
              <Users className="w-12 h-12 text-[#FF4D00] mb-4" />
              <h4 className="text-2xl font-black mb-3 text-[#5D9FFF]">IN-PERSON CLASSES</h4>
              <p className="text-[#FFC857]">Join our hands-on classes with expert instructors</p>
            </div>
            <div 
              className="bg-[#1E2761] p-6 rounded-xl border-4 border-[#FF4D00] transform hover:scale-105 transition-transform duration-200 cursor-pointer"
              onClick={() => setShowRobotKits(true)}
            >
              <Box className="w-12 h-12 text-[#FF4D00] mb-4" />
              <h4 className="text-2xl font-black mb-3 text-[#5D9FFF]">ROBOT KITS</h4>
              <p className="text-[#FFC857]">Get your own robot kit to build and program at home</p>
            </div>
          </div>
        </div>

        {/* Footer - Fades in on scroll */}
        <footer 
          ref={footerRef}
          className="mt-20 text-center text-[#5D9FFF] border-t-4 border-[#FF4D00] pt-8 opacity-0 translate-y-10 transition-all duration-1000"
        >
          <p className="font-bold">© 2025 STARBASE ACADEMY | ALL RIGHTS RESERVED</p>
        </footer>
      </div>

      {/* Promotional Modal */}
      {activeModal && (
        <PromotionalModal
          isOpen={true}
          onClose={() => setActiveModal(null)}
          title={PROMOTIONAL_CONTENT[activeModal].title}
          content={PROMOTIONAL_CONTENT[activeModal].modalContent}
        />
      )}
    </div>
  );
}

export default App;