
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import TransitionEffect from '@/components/TransitionEffect';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  // Smooth scroll to anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        if (target) {
          document.querySelector(target)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Clean up event listeners
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function(e) {
          e.preventDefault();
          const target = this.getAttribute('href');
          if (target) {
            document.querySelector(target)?.scrollIntoView({
              behavior: 'smooth'
            });
          }
        });
      });
    };
  }, []);

  return (
    <TransitionEffect>
      <Helmet>
        <title>Mario Jesús Castro Montenegro | Chief Product Officer</title>
        <meta name="description" content="Especialista en Gestión de Productos, Transformación Digital y Metodologías Ágiles. Más de 4 años de experiencia en la industria TI." />
        <meta name="keywords" content="Mario Castro, CPO, Product Management, Gestión de Producto, Transformación Digital, Metodologías Ágiles, Lima, Perú" />
        <meta property="og:title" content="Mario Jesús Castro Montenegro | Chief Product Officer" />
        <meta property="og:description" content="Especialista en Gestión de Productos, Transformación Digital y Metodologías Ágiles. Más de 4 años de experiencia en la industria TI." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mariocastro.pe" />
        <meta property="og:image" content="/lovable-uploads/ea351c69-328d-4bb3-8123-b7e650298e9c.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mario Jesús Castro Montenegro | Chief Product Officer" />
        <meta name="twitter:description" content="Especialista en Gestión de Productos, Transformación Digital y Metodologías Ágiles." />
        <meta name="twitter:image" content="/lovable-uploads/ea351c69-328d-4bb3-8123-b7e650298e9c.png" />
        <link rel="canonical" href="https://mariocastro.pe" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Mario Jesús Castro Montenegro" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Navbar />
      <Hero />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </TransitionEffect>
  );
};

export default Index;
