
import React from 'react';
import AnimatedSection from './AnimatedSection';

const Hero: React.FC = () => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-[85vh] flex items-center pt-16 overflow-hidden"
    >
      {/* Background elements - subtle shapes */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-accent/20 filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-[5%] w-72 h-72 rounded-full bg-primary/10 filter blur-3xl" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="section-container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Contenido de texto - Ahora ocupa 7 columnas */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <AnimatedSection>
              <span className="inline-block px-3 py-1 mb-5 text-xs font-medium text-accent bg-accent/10 rounded-full">
                Chief Product Officer
              </span>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <h1 className="mb-5">
                Transformando <span className="text-accent">ideas</span> en soluciones para negocios
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <p className="text-lg mb-5 max-w-xl">
                Apasionado por la innovación y la tecnología para crear e implementar productos digitales que marquen la diferencia para los usuarios. 
                Profesional con más de cuatro años de experiencia en la industria de TI, enfocado en fortalecer relaciones y 
                desarrollar nuevas tecnologías para clientes con diversos modelos de negocio.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#servicios" 
                  className="px-8 py-3 rounded-full bg-accent text-white font-medium 
                  transition-all duration-300 hover:bg-accent/90 button-hover-effect"
                >
                  Mis servicios
                </a>
                <a 
                  href="#experiencia" 
                  className="px-8 py-3 rounded-full bg-secondary text-foreground font-medium 
                  transition-all duration-300 hover:bg-secondary/70"
                >
                  Mi experiencia
                </a>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <div className="mt-6">
                <p className="text-sm text-muted-foreground mb-2">Certificaciones</p>
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="px-3 py-1 bg-secondary text-foreground text-xs rounded-full">Design Sprint Master</span>
                  <span className="px-3 py-1 bg-secondary text-foreground text-xs rounded-full">Google Cloud</span>
                  <span className="px-3 py-1 bg-secondary text-foreground text-xs rounded-full">Scrum Product Owner</span>
                  <span className="px-3 py-1 bg-secondary text-foreground text-xs rounded-full">Oracle DB</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Imagen - Ahora ocupa 5 columnas y está a la izquierda en pantallas grandes */}
          <AnimatedSection animation="fade-in-right" delay={200} className="lg:col-span-5 order-1 lg:order-2">
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-full overflow-hidden">
                {/* Imagen con bordes redondeados */}
                <div className="aspect-[3/4] relative">
                  <img 
                    src="/lovable-uploads/ea351c69-328d-4bb3-8123-b7e650298e9c.png" 
                    alt="Mario Jesús Castro Montenegro - Chief Product Officer"
                    className="w-full h-full object-cover object-center rounded-2xl shadow-lg"
                    loading="eager"
                  />
                  
                  {/* Glass card effect overlaid on the image */}
                  <div className="absolute bottom-6 left-6 right-6 glass-panel p-5 rounded-xl">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-medium mb-1">Mario Jesús Castro</h3>
                        <p className="text-sm text-foreground/80">Chief Product Officer en Sintad</p>
                      </div>
                      <div>
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent">
                          +10
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-white/80 rounded-full text-xs">Metodologías Ágiles</span>
                      <span className="px-2 py-1 bg-white/80 rounded-full text-xs">Transformación Digital</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
