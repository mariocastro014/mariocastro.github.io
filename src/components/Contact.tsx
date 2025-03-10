
import React from 'react';
import AnimatedSection from './AnimatedSection';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-12 bg-secondary/50">
      <div className="section-container">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-medium text-accent bg-accent/10 rounded-full">
              Contacto
            </span>
            <h2 className="mb-6">¿Listo para potenciar tu negocio?</h2>
            <p className="text-lg mb-8">
              Estoy disponible para discutir cómo puedo ayudar a tu empresa a alcanzar sus objetivos.
              Puedes contactarme directamente a través de:
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <div className="flex items-center">
                <div className="p-2 rounded-full bg-accent/10 text-accent mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <a href="mailto:mjcastro@sintad.pe" className="text-foreground hover:text-accent transition-colors">
                  mjcastro@sintad.pe
                </a>
              </div>
              
              <div className="flex items-center">
                <div className="p-2 rounded-full bg-accent/10 text-accent mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <a href="https://linkedin.com/in/mario-castromontenegro" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">
                  linkedin.com/in/mario-castromontenegro
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
