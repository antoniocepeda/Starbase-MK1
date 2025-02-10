import React from 'react';
import { Users, Clock, Calendar } from 'lucide-react';
import type { ClassProgram } from '../types';

export function ProgramCard({ title, description, ageGroup, duration, maxStudents, image, schedule }: ClassProgram) {
  return (
    <div className="bg-[#1E2761] rounded-xl overflow-hidden border-4 border-[#FF4D00] transform hover:scale-105 transition-all duration-200">
      <div className="aspect-video">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-[#5D9FFF]">{title}</h3>
          <span className="bg-[#FF4D00] text-white px-3 py-1 rounded-full text-sm font-bold">
            {ageGroup}
          </span>
        </div>
        <p className="text-[#FFC857] mb-4">{description}</p>
        <div className="flex flex-wrap gap-4 text-white mb-4">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>Max {maxStudents} students</span>
          </div>
        </div>
        <div className="border-t border-[#FF4D00]/30 pt-4">
          <h4 className="text-[#5D9FFF] font-bold mb-2 flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Available Sessions
          </h4>
          <div className="space-y-2">
            {schedule.map((session, index) => (
              <div key={index} className="flex justify-between items-center text-sm">
                <span className="text-white">{session.day} at {session.time}</span>
                <span className="text-[#FFC857]">{session.spots} spots left</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}