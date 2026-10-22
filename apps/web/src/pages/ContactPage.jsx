import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';

function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      detail: '(239) 445-4840',
      link: 'tel:2394454840',
    },
    {
      icon: Mail,
      title: 'Email',
      detail: 'GeekGlass@gmail.com',
      link: 'mailto:GeekGlass@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Service Area',
      detail: 'Bonita Springs, Naples, Fort Myers , Fort Myers Beach, North Fort Myers, Estero, Cape Coral, Sanibal Island , Marco Island',
      link: '/services',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact GlassGeek | Free Sliding Door & Glass Repair Quote</title>
        <meta
          name="description"
          content="Contact GlassGeek for a free quote on sliding door and glass repair in Fort Myers, FL. Call or message us today."
        />
        <link rel="canonical" href="https://glassgeek-slidingdoorfl.com/contact" />
      </Helmet>

      <Header />

      <main>
        <section className="bg-accent text-accent-foreground py-16 md:py-24 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="heading-display mb-4">Contact Us</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Need a repair? Fill out the form or give us a call for a free estimate.
            </p>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="heading-section text-foreground mb-8 gold-underline">
                  Get In Touch
                </h2>
                
                <div className="space-y-6 mb-10 mt-8">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-center gap-4 bg-muted p-5 rounded-xl border border-border">
                      <div className="bg-background p-3 rounded-full shadow-sm text-primary">
                        <info.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">
                          {info.title}
                        </p>
                        {info.link.startsWith('http') || info.link.startsWith('tel') || info.link.startsWith('mailto') ? (
                          <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors text-lg">
                            {info.detail}
                          </a>
                        ) : (
                          <p className="text-muted-foreground text-lg">{info.detail}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-accent/50 rounded-xl p-6 border border-primary/20 flex gap-4">
                  <Clock className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground text-lg mb-1">Same-Day Service Available</p>
                    <p className="text-muted-foreground">
                      Call before noon for same-day scheduling in most areas. Subject to availability.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="bg-card shadow-lg border-border">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-heading font-bold text-card-foreground mb-6">
                      Request a Free Quote
                    </h2>
                    <QuoteForm />
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ContactPage;