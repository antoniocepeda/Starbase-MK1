import React from 'react';
import type { Facility } from '../types';

export function FacilityCard({ name, description, image }: Facility) {
  return (
    <div className="relative group overflow-hidden rounded-xl border-4 border-[#FF4D00]">
      <div className="aspect-video">
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-2xl font-bold text-[#5D9FFF] mb-2">{name}</h3>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
}