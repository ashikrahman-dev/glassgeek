import React from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

function LocationButton({ location, isActive, onClick }) {
  return (
    <Button
      variant={isActive ? "default" : "outline"}
      className={`flex items-center gap-2 transition-all duration-300 rounded-lg px-6 py-6 ${
        isActive 
          ? 'bg-primary text-primary-foreground border-primary hover:bg-primary/90 shadow-md' 
          : 'border-border bg-card hover:border-secondary hover:text-secondary hover:shadow-sm text-foreground'
      }`}
      onClick={onClick}
    >
      <MapPin className={`w-5 h-5 ${isActive ? 'text-secondary' : 'text-primary'}`} />
      <span className="font-medium text-base">{location}</span>
    </Button>
  );
}

export default LocationButton;