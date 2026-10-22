import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function GalleryPage() {
  const images = [
    {
      url: 'https://horizons-cdn.hostinger.com/d5c4ccd2-d96e-412d-bcbb-9955fe3797f9/820ee7ab7d131b988336526be7701e0f.jpg',
      title: 'Sliding door handle close-up',
      description: 'Professional detail of precision sliding door hardware and handle mechanism',
    },
    {
      url: 'https://horizons-cdn.hostinger.com/d5c4ccd2-d96e-412d-bcbb-9955fe3797f9/487b00caa9038d8b11108000d082a0f7.jpg',
      title: 'Outdoor patio with sliding glass door',
      description: 'Beautiful residential patio featuring professionally maintained sliding glass doors',
    },
    {
      url: 'https://horizons-cdn.hostinger.com/d5c4ccd2-d96e-412d-bcbb-9955fe3797f9/1a26b78c769aba835c692904946bb2e3.png',
      title: 'Before and after window repair',
      description: 'Transformation showing our expert window repair and restoration results',
    },
    {
      url: 'https://horizons-cdn.hostinger.com/d5c4ccd2-d96e-412d-bcbb-9955fe3797f9/49ea9fd2e62a32fb5997e2e16f8b713c.jpg',
      title: 'Sliding door roller mechanism',
      description: 'Close-up of precision sliding door roller system and track components',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Project Gallery | Sliding Door & Glass Work | GlassGeek</title>
        <meta
          name="description"
          content="See our completed sliding door and glass replacement projects across the Fort Myers, FL area."
        />
        <link rel="canonical" href="https://glassgeek-slidingdoorfl.com/gallery" />
      </Helmet>

      <Header />

      <main>
        <section className="bg-accent text-accent-foreground py-16 md:py-24 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="heading-display mb-4">Our Work</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Take a look at our recent projects and see the quality of work we deliver.
            </p>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-bold text-card-foreground mb-2">{image.title}</h3>
                    <p className="text-muted-foreground">{image.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default GalleryPage;