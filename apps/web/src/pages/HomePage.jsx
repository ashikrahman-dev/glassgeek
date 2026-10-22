import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, Award, Shield, Users, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import LocationButton from '@/components/LocationButton.jsx';
import QuoteForm from '@/components/QuoteForm.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';

function HomePage() {
  const [activeLocation, setActiveLocation] = useState('Bonita Springs');
  const serviceLocations = ['Bonita Springs', 'Naples', 'Marco Island', 'Fort Myers', 'North Fort Myers', 'Estero', 'Cape Coral', 'Sanibel Island', 'Fort Myers Beach'];
  const services = [{
    title: 'Sliding Door Repair',
    description: 'Professional repair of sliding doors including track alignment, smooth operation restoration, and structural fixes',
    image: 'https://horizons-cdn.hostinger.com/d5c4ccd2-d96e-412d-bcbb-9955fe3797f9/911c2e55700279fd286b6b03c26f6706.jpg'
  }, {
    title: 'Broken Glass Replacement',
    description: 'Expert glass replacement for sliding doors and windows, ensuring perfect fit and safety',
    image: 'https://images.unsplash.com/photo-1641648538450-7252872e3106'
  }, {
    title: 'Sliding Door Rollers Replacement',
    description: 'Replace worn or damaged rollers to restore smooth, quiet operation of your sliding doors',
    image: 'https://horizons-cdn.hostinger.com/d5c4ccd2-d96e-412d-bcbb-9955fe3797f9/70e31ab9f65a9a0be46a582df2358232.jpg'
  }, {
    title: 'Window Repair',
    description: 'Complete window repair services including frame fixes, seal replacement, and operational restoration',
    image: 'https://horizons-cdn.hostinger.com/d5c4ccd2-d96e-412d-bcbb-9955fe3797f9/ec113ab4f4cc6a5710cb5c1ffdda1227.jpg'
  }];
  
  const values = [{
    icon: Award,
    title: 'Quality workmanship',
    description: 'Every repair is completed to the highest standards with attention to detail'
  }, {
    icon: Shield,
    title: 'Trust and integrity',
    description: 'Honest assessments and transparent pricing with no hidden fees'
  }, {
    icon: Users,
    title: 'Customer focused',
    description: 'Your satisfaction is our priority from first call to final inspection'
  }, {
    icon: Clock,
    title: 'Timely service',
    description: 'Same-day service available in most areas when you need it'
  }];
  
  return (
    <>
      <Helmet>
        <title>GlassGeek | Sliding Door & Glass Repair in Fort Myers, FL</title>
        <meta name="description" content="Expert sliding door repair and glass replacement across Fort Myers, North Fort Myers, Sanibel Island & Fort Myers Beach. Get a free quote today." />
        <link rel="canonical" href="https://glassgeek-slidingdoorfl.com/" />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section id="home" className="relative p-2 flex flex-col justify-center min-h-[90dvh]">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1777974491990-bbbfb0e80285?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sunset over ocean water representing Southwest Florida coastal beauty" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary/90"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex justify-center w-full mb-10 lg:mb-16">
              <img src="https://images.unsplash.com/photo-1777974491990-bbbfb0e80285?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="GlassGeek Image" className="w-full h-auto object-contain rounded-2xl shadow-2xl border-2 border-white/10" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary-foreground font-bold text-sm mb-6 border border-secondary/30 backdrop-blur-sm">
                  <CheckCircle2 className="w-4 h-4 text-secondary" /> SWFL Family Owned & Operated
                </div>
                <h1 className="heading-display text-white mb-6">
                  We're Geeks about <br />
                  <span className="text-secondary">Sliding Doors & Windows</span>
                </h1>
                <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-xl">
                  We're geeks about sliding doors and windows- obsessed with every roller, track, lock and broken glass. At GlassGeek, we don't just fix problems, we fine-tune performance, making everything glide smoother, quieter and better than before. 
                  Smart repairs, done right.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 rounded-lg font-bold shadow-lg">
                    <a href="#contact">
                      Get a Free Quote
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white text-lg px-8 py-6 rounded-lg font-bold border-white/30 backdrop-blur-sm">
                    <a href="/services">
                      View Our Services
                    </a>
                  </Button>
                </div>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className="hidden lg:block relative">
                <div className="bg-card p-8 rounded-2xl shadow-2xl max-w-md ml-auto border-t-4 border-t-secondary">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-2">Request Service</h3>
                  <p className="text-muted-foreground mb-6">Fill out the form and we'll call you right back.</p>
                  <QuoteForm />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section-padding bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-secondary font-bold uppercase tracking-wider mb-2">What We Offer</p>
              <h2 className="heading-section text-primary gold-underline mb-6">
                Our Expert Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
                From sliding door, windows repairs to glass replacement, we provide comprehensive solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }}>
                  <ServiceCard title={service.title} description={service.description} image={service.image} />
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild variant="outline" className="rounded-lg px-8 py-6 font-bold border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href="/services">See All Services <ArrowRight className="ml-2 w-4 h-4" /></a>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Showcase Section */}
        <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
          {/* Subtle background texture */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                <p className="text-secondary font-bold uppercase tracking-wider mb-2">Real Reviews</p>
                <h2 className="heading-section text-white mb-6">
                  Don't Just Take Our Word For It
                </h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
                  See what our neighbors across Southwest Florida are saying about our sliding door and window repair services.
                </p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              whileInView={{ opacity: 1, scale: 1, y: 0 }} 
              transition={{ duration: 0.7, ease: "easeOut" }} 
              viewport={{ once: true }}
              className="w-full mx-auto rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 bg-white"
            >
              <img 
                src="https://horizons-cdn.hostinger.com/d5c4ccd2-d96e-412d-bcbb-9955fe3797f9/7a67ec1781f1d2d446ce26083233b265.jpg" 
                alt="Compilation of 5-star customer testimonials and reviews for GlassGeek services" 
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col justify-center">
                <p className="text-secondary font-bold uppercase tracking-wider mb-2">Who We Are</p>
                <h2 className="heading-section text-primary mb-6">
                  About GlassGeek
                </h2>
                
                <blockquote className="text-2xl md:text-3xl font-heading font-bold italic text-primary mb-8 border-l-4 border-secondary pl-6 py-2">
                  "We make a living by what we get, but we make a life by what we give."
                  <footer className="text-secondary mt-4 not-italic text-lg font-bold">
                    — GlassGeek Sliding Doors & Windows
                  </footer>
                </blockquote>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Welcome to GlassGeek, a family-owned business with extensive experience in sliding doors repair. We specialize in fixing patio doors — rollers, lock & handle, track replacement, windows, weather stripping, glass replacement, and more.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our main goal is to provide reliable services at a fair value to each and every customer. We treat every home as if it were our own, and every customer as family.
                </p>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <p className="text-secondary font-bold uppercase tracking-wider mb-2">Why Choose Us</p>
                <h2 className="heading-section text-primary mb-6">
                  Family-owned and operated since 2012
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  GlassGeek specializes in professional repair and maintenance of sliding patio doors, windows, and all related components. We take pride in our commitment to quality workmanship and honest service.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {values.map(value => (
                    <div key={value.title} className="flex gap-4">
                      <div className="mt-1 text-secondary">
                        <value.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-primary mb-1">{value.title}</h4>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button asChild className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                  <a href="/about">Learn More About Us</a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Coverage Area Section */}
        <section className="section-padding bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="heading-section text-primary mb-4">
                Service coverage across Southwest Florida
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Select your location to see our coverage details
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mb-10">
              {serviceLocations.map(location => (
                <LocationButton key={location} location={location} isActive={activeLocation === location} onClick={() => setActiveLocation(location)} />
              ))}
            </div>

            <Card className="max-w-2xl mx-auto bg-card shadow-lg border-t-4 border-t-secondary">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  {activeLocation}
                </h3>
                <p className="text-muted-foreground text-lg">
                  We provide comprehensive sliding door and window repair services throughout <strong>{activeLocation}</strong> and surrounding areas. Our technicians are ready to help with roller replacement, track repair, glass replacement, and more.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <p className="text-secondary font-bold uppercase tracking-wider mb-2">Get In Touch</p>
                <h2 className="heading-section text-primary mb-6">
                  Ready to fix your doors and windows?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Fill out the form with your details, and our team will get back to you promptly to schedule a repair or provide an estimate.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 bg-muted p-6 rounded-xl border border-border shadow-sm">
                    <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-primary text-lg">Same-Day Service Available</p>
                      <p className="text-muted-foreground">Call for same-day scheduling</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-card shadow-lg border-t-4 border-t-secondary">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-6">Request a Free Quote</h3>
                  <QuoteForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;