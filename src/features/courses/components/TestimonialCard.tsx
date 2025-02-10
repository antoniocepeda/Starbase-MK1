import React from 'react';
import { Star } from 'lucide-react';
import type { Testimonial } from '../types';

export function TestimonialCard({ name, role, image, quote, rating }: Testimonial) {
  return (
    <div className="bg-[#1E2761] p-6 rounded-xl border-4 border-[#FF4D00] transform hover:scale-105 transition-all duration-200">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-[#FF4D00]"
        />
        <div>
          <h4 className="font-bold text-[#5D9FFF]">{name}</h4>
          <p className="text-sm text-[#FFC857]">{role}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-[#FF4D00] fill-current" />
        ))}
      </div>
      <p className="text-white italic">"{quote}"</p>
    </div>
  );
}