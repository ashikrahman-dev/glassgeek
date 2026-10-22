import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function ServiceCard({ icon: Icon, image, title, description }) {
  return (
    <Card className="bg-card border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full flex flex-col rounded-xl group border-t-4 border-t-secondary">
      {image && (
        <div className="aspect-[16/10] overflow-hidden bg-muted relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>
      )}
      <CardHeader className={`relative z-20 ${image ? "pt-6" : "pt-8"} px-6 bg-primary text-primary-foreground`}>
        {Icon && (
          <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 text-secondary-foreground">
            <Icon className="w-6 h-6" />
          </div>
        )}
        <CardTitle className="font-heading text-xl font-bold text-primary-foreground group-hover:text-secondary transition-colors duration-200">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow px-6 py-8 bg-card text-card-foreground">
        <p className="text-foreground/80 leading-relaxed text-base">{description}</p>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;