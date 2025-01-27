import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  rating: number;
  image: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  author,
  rating,
  image,
}) => {
  return (
    <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-[#00D4FF]/20 hover:border-[#00D4FF]/50 transition-all duration-300 hover:scale-105">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={author}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="flex gap-1">
            {[...Array(rating)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className="fill-[#FF6F00] text-[#FF6F00]"
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-white/90 mb-4 italic">"{quote}"</p>
      <p className="text-[#00D4FF] font-semibold">— {author}</p>
    </div>
  );
};

export default TestimonialCard;