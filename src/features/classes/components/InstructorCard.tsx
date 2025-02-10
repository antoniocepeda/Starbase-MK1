import React from 'react';
import type { Instructor } from '../types';

export function InstructorCard({ name, role, bio, image, specialties }: Instructor) {
  return (
    <div className="bg-[#1E2761] rounded-xl p-6 border-4 border-[#FF4D00] transform hover:scale-105 transition-all duration-200">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full object-cover border-2 border-[#FF4D00]"
        />
        <div>
          <h3 className="text-xl font-bold text-[#5D9FFF]">{name}</h3>
          <p className="text-[#FFC857]">{role}</p>
        </div>
      </div>
      <p className="text-white mb-4">{bio}</p>
      <div className="flex flex-wrap gap-2">
        {specialties.map((specialty, index) => (
          <span
            key={index}
            className="bg-[#FF4D00]/20 text-[#FFC857] px-3 py-1 rounded-full text-sm"
          >
            {specialty}
          </span>
        ))}
      </div>
    </div>
  );
}