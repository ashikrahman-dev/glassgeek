import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
function Footer() {
  const serviceAreas = ['Bonita Springs', 'Naples', 'Fort Myers', 'North Fort Myers', 'Fort Myers Beach', 'Cape Coral', 'Marco Island', 'Estero', 'Sanibel Island'];
  return <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t-4 border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div>
            <span className="text-3xl font-heading font-extrabold tracking-tight block mb-6">
              <span className="text-white">Glass</span><span className="text-secondary">Geek</span>
            </span>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Professional sliding door and window repair services across Southwest Florida since 2012. We bring clarity and smooth operation back to your home.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-heading font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {['Home', 'Services', 'Gallery', 'Contact'].map(item => <Link key={item} to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200">
                  {item}
                </Link>)}
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-heading font-bold text-white mb-6 uppercase tracking-wider">Contact Info</h4>
            <div className="flex flex-col gap-4">
              <a href="tel:2394454840" className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors duration-200">
                <Phone className="w-5 h-5 text-secondary" />
                (239) 445-4840
              </a>
              <a href="mailto:GeekGlass@gmail.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors duration-200">
                <Mail className="w-5 h-5 text-secondary" />
                GeekGlass@gmail.com
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80 mt-2">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-white mb-1">Service Areas:</p>
                  <p className="text-sm leading-relaxed">{serviceAreas.join(', ')}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-heading font-bold text-white mb-6 uppercase tracking-wider">Business Hours</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Mon - Fri:</span>
                <span className="font-medium text-white">8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Saturday:</span>
                <span className="font-medium text-white">9:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="font-medium text-white">9:00 AM - 4:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} GlassGeek. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <span className="text-primary-foreground/60 hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-primary-foreground/60 hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>;
}
export default Footer;