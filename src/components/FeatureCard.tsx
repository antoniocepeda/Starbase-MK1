import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, Icon }) => {
  return (
    <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-[#00D4FF]/20 hover:border-[#00D4FF]/50 transition-all duration-300 group">
      <div className="mb-4">
        <Icon
          size={40}
          className="text-[#00D4FF] group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <h3 className="text-xl font-bold text-white mb-2 font-['Orbitron']">
        {title}
      </h3>
      <p className="text-white/80">{description}</p>
    </div>
  );
};

export default FeatureCard;