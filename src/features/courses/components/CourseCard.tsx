import React from 'react';
import { Clock, Users, Star } from 'lucide-react';
import type { Course } from '../types';

export function CourseCard({ title, description, duration, students, rating, image }: Course) {
  return (
    <div className="bg-[#1E2761] rounded-xl overflow-hidden border-4 border-[#FF4D00] transform hover:scale-105 transition-all duration-200">
      <div className="aspect-video">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-[#5D9FFF]">{title}</h3>
        <p className="text-[#FFC857] mb-4">{description}</p>
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>{students}</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-[#FF4D00]" />
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}