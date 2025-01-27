import React from 'react';
import { Shield, Lock, Eye, UserCheck } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] to-[#1a1a2e] text-white pt-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 font-['Orbitron'] glow-text text-center">
          Privacy Policy
        </h1>

        <div className="space-y-8">
          {/* Introduction */}
          <section className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-[#00D4FF]/20">
            <div className="flex items-center gap-4 mb-4">
              <Shield className="text-[#00D4FF]" size={32} />
              <h2 className="text-2xl font-bold font-['Orbitron']">Introduction</h2>
            </div>
            <p className="text-white/90 leading-relaxed">
              At Starbase Academy, we take your privacy seriously. This policy describes how we collect,
              use, and protect your personal information when you use our services.
            </p>
          </section>

          {/* Data Collection */}
          <section className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-[#00D4FF]/20">
            <div className="flex items-center gap-4 mb-4">
              <Lock className="text-[#00D4FF]" size={32} />
              <h2 className="text-2xl font-bold font-['Orbitron']">Data Collection</h2>
            </div>
            <div className="space-y-4">
              <p className="text-white/90">We collect information that you provide directly to us:</p>
              <ul className="list-disc list-inside text-white/90 space-y-2">
                <li>Name and contact information</li>
                <li>Account credentials</li>
                <li>Course participation data</li>
                <li>Payment information</li>
              </ul>
            </div>
          </section>

          {/* Data Usage */}
          <section className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-[#00D4FF]/20">
            <div className="flex items-center gap-4 mb-4">
              <Eye className="text-[#00D4FF]" size={32} />
              <h2 className="text-2xl font-bold font-['Orbitron']">How We Use Your Data</h2>
            </div>
            <div className="space-y-4">
              <p className="text-white/90">Your information helps us:</p>
              <ul className="list-disc list-inside text-white/90 space-y-2">
                <li>Provide and improve our services</li>
                <li>Personalize your learning experience</li>
                <li>Send important updates and announcements</li>
                <li>Process payments and prevent fraud</li>
              </ul>
            </div>
          </section>

          {/* Data Protection */}
          <section className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-[#00D4FF]/20">
            <div className="flex items-center gap-4 mb-4">
              <UserCheck className="text-[#00D4FF]" size={32} />
              <h2 className="text-2xl font-bold font-['Orbitron']">Data Protection</h2>
            </div>
            <p className="text-white/90 leading-relaxed">
              We implement appropriate security measures to protect your personal information from
              unauthorized access, disclosure, alteration, or destruction.
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

export default PrivacyPolicy;