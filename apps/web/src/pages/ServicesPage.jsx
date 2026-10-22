import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';

function ServicesPage() {
  const services = [
    {
      title: 'Sliding Door Repair',
      description: 'Professional repair of sliding doors including track alignment, smooth operation restoration, and structural fixes',
      image: 'https://images.unsplash.com/photo-1696846911625-beb54786c1e3',
    },
    {
      title: 'Broken Glass Replacement',
      description: 'Expert glass replacement for sliding doors and windows, ensuring perfect fit and safety',
      image: 'https://images.unsplash.com/photo-1522940939486-cdb94c98f3c0',
    },
    {
      title: 'Sliding Door Rollers Replacement',
      description: 'Replace worn or damaged rollers to restore smooth, quiet operation of your sliding doors',
      image: 'https://images.unsplash.com/photo-1512101762949-fb686365cda1',
    },
    {
      title: 'Window Repair',
      description: 'Complete window repair services including frame fixes, seal replacement, and operational restoration',
      image: 'https://images.unsplash.com/photo-1659460792514-a5f02409e872',
    },
    {
      title: 'Foggy, Broken & Cracked Glass Replacement',
      description: 'Restore clarity and safety to your windows with expert replacement of foggy, broken, and cracked glass panes. We measure, source, and install the right glass for a perfect, long-lasting seal.',
      image: 'https://images.unsplash.com/photo-1684791393296-cf1e552c25aa',
    },
    {
      title: 'Tracks, Locks & More',
      description: 'Specialized repair and replacement of tracks, locks, handles, weather stripping, and other hardware components',
      image: 'https://images.unsplash.com/photo-1512101762949-fb686365cda1',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Services | Sliding Door & Glass Replacement | GlassGeek</title>
        <meta
          name="description"
          content="Foggy, broken & cracked glass replacement and sliding door repair across the Fort Myers area. Fast, reliable local service."
        />
        <link rel="canonical" href="https://glassgeek-slidingdoorfl.com/services" />
      </Helmet>

      <Header />

      <main>
        <section className="bg-accent text-accent-foreground py-16 md:py-24 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="heading-display mb-4">Our Services</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Professional, reliable, and guaranteed repair services for all your sliding door and window needs.
            </p>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    image={service.image}
                  />
                </motion.div>
              ))}
            </div>

            <div className="mt-20 bg-muted rounded-2xl p-10 text-center">
              <h2 className="heading-section mb-4">Don't see what you need?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                We handle a wide variety of specialized door and window repairs. Contact us directly to discuss your specific issue.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 rounded-lg text-lg">
                <a href="/contact">Contact Us Today</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ServicesPage;