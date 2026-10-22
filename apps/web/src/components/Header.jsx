import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsOpen(false);
    } else if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    }
  };
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Services',
    path: '/services'
  }, {
    name: 'Gallery',
    path: '/gallery'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  return <header className="sticky top-0 w-full z-50 bg-primary shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <span className="text-3xl font-heading font-extrabold tracking-tight">
              <span className="text-white">Glass</span><span className="text-secondary drop-shadow-sm">Geek</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <Link key={link.name} to={link.path} className={`text-base font-semibold transition-colors duration-200 ${location.pathname === link.path ? 'text-secondary border-b-2 border-secondary pb-1' : 'text-white/90 hover:text-secondary'}`}>
                {link.name}
              </Link>)}
            <div className="flex items-center gap-4 ml-4">
              <a href="tel:2394454840" className="flex items-center text-white font-bold hover:text-secondary transition-colors">
                <Phone className="w-5 h-5 mr-2" />
                (239) 445-4840
              </a>
              <Button onClick={() => scrollToSection('contact')} className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold rounded-lg px-6">
                Free Quote
              </Button>
            </div>
          </nav>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[300px] border-l-border bg-background">
                <SheetHeader className="mb-8 mt-4 text-left">
                  <SheetTitle>
                    <span className="text-2xl font-heading font-extrabold tracking-tight">
                      <span className="text-primary">Glass</span><span className="text-secondary">Geek</span>
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4">
                  {navLinks.map(link => <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} className={`text-lg font-medium p-2 rounded-md transition-colors ${location.pathname === link.path ? 'bg-secondary/10 text-secondary' : 'text-foreground hover:bg-muted'}`}>
                      {link.name}
                    </Link>)}
                  <div className="mt-6 space-y-4">
                    <a href="tel:2394454840" className="flex items-center text-foreground font-bold p-2">
                      <Phone className="w-5 h-5 mr-2 text-secondary" />
                      (239) 445-4840
                    </a>
                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-6 text-lg" onClick={() => scrollToSection('contact')}>
                      Get a Free Quote
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>;
}
export default Header;