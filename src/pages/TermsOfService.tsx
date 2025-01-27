import React from 'react';
import { FileText, Scale, AlertCircle, HelpCircle } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] to-[#1a1a2e] text-white pt-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 font-['Orbitron'] glow-text text-center">
          Terms of Service
        </h1>

        <div className="space-y-8">
          {/* Agreement */}
          <section className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-[#00D4FF]/20">
            <div className="flex items-center gap-4 mb-4">
              <FileText className="text-[#00D4FF]" size={32} />
              <h2 className="text-2xl font-bold font-['Orbitron']">Agreement</h2>
            </div>
            <p className="text-white/90 leading-relaxed">
              By accessing or using Starbase Academy's services, you agree to be bound by these Terms
              of Service and all applicable laws and regulations.
            </p>
          </section>

          {/* User Responsibilities */}
          <section className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-[#00D4FF]/20">
            <div className="flex items-center gap-4 mb-4">
              <Scale className="text-[#00D4FF]" size={32} />
              <h2 className="text-2xl font-bold font-['Orbitron']">User Responsibilities</h2>
            </div>
            <div className="space-y-4">
              <p className="text-white/90">As a user, you agree to:</p>
              <ul className="list-disc list-inside text-white/90 space-y-2">
                <li>Provide accurate registration information</li>
                <li>Maintain the security of your account</li>
                <li>Comply with all local, state, and federal laws</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </div>
          </section>

          {/* Prohibited Activities */}
          <section className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-[#00D4FF]/20">
            <div className="flex items-center gap-4 mb-4">
              <AlertCircle className="text-[#00D4FF]" size={32} />
              <h2 className="text-2xl font-bold font-['Orbitron']">Prohibited Activities</h2>
            </div>
            <div className="space-y-4">
              <p className="text-white/90">Users must not:</p>
              <ul className="list-disc list-inside text-white/90 space-y-2">
                <li>Share account credentials</li>
                <li>Violate intellectual property rights</li>
                <li>Engage in unauthorized access</li>
                <li>Disrupt service operations</li>
              </ul>
            </div>
          </section>

          {/* Support */}
          <section className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-[#00D4FF]/20">
            <div className="flex items-center gap-4 mb-4">
              <HelpCircle className="text-[#00D4FF]" size={32} />
              <h2 className="text-2xl font-bold font-['Orbitron']">Support</h2>
            </div>
            <p className="text-white/90 leading-relaxed">
              For questions about these terms, please contact our support team. We're here to help
              ensure you have the best possible experience with our services.
            </p>
          </section>
        </div>

        <div className="text-center text-white/60 mt-8 mb-16">
          Last updated: March 15, 2024
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;