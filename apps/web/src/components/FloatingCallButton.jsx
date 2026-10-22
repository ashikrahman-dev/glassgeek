import React from 'react';
import { Phone } from 'lucide-react';

function FloatingCallButton() {
  return (
    <a
      href="tel:2394454840"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center gap-3 bg-secondary text-secondary-foreground px-5 py-3 md:px-6 md:py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-secondary/90 transition-all duration-300 group"
      aria-label="Call us at (239) 445-4840"
    >
      <div className="bg-white/20 p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
        <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </div>
      <span className="font-heading font-bold text-sm md:text-base tracking-wide">
        (239) 445-4840
      </span>
    </a>
  );
}

export default FloatingCallButton;