import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import type { PricingPlan } from '../types';

export function PricingPlanCard({ name, price, duration, features, isPopular, ctaText }: PricingPlan) {
  return (
    <div className={`bg-[#1E2761] rounded-xl p-8 border-4 ${isPopular ? 'border-[#FF4D00]' : 'border-[#5D9FFF]'} relative transform hover:scale-105 transition-all duration-200`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-[#FF4D00] text-white px-4 py-1 rounded-full text-sm font-bold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2 text-[#5D9FFF]">{name}</h3>
      <div className="mb-2">
        <span className="text-4xl font-black text-white">${price}</span>
      </div>
      <p className="text-[#FFC857] mb-6">{duration}</p>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-white">
            <Check className="w-5 h-5 text-[#FF4D00] shrink-0 mt-1" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-4 rounded-lg font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
          isPopular
            ? 'bg-[#FF4D00] hover:bg-[#FF6B00] text-white'
            : 'bg-[#5D9FFF] hover:bg-[#4A8FFF] text-white'
        }`}
      >
        {ctaText} <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}