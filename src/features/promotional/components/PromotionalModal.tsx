import React from 'react';
import { X } from 'lucide-react';

interface PromotionalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

export function PromotionalModal({ isOpen, onClose, title, content }: PromotionalModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-4xl bg-[#1E2761] rounded-2xl border-4 border-[#FF4D00] shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b-4 border-[#FF4D00]">
          <h2 className="text-3xl font-black text-[#5D9FFF]">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 text-white hover:text-[#FF4D00] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {content}
        </div>
      </div>
    </div>
  );
}