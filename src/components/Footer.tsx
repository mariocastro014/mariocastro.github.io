
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-xl font-semibold mb-4 inline-block">
              <span className="text-white">Mario</span>
              <span className="text-accent">Castro</span>
            </a>
            <p className="text-primary-foreground/70 mt-4 max-w-md">
              Apasionado por la innovación y la tecnología para crear e implementar productos digitales que marquen 
              la diferencia para los usuarios. Especialista en Metodologías ágiles, Tecnología, Transformación Digital, Gestión de Productos, Consultoría.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-medium mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-primary-foreground/70 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#experiencia" className="text-primary-foreground/70 hover:text-white transition-colors">Experiencia</a></li>
              <li><a href="#servicios" className="text-primary-foreground/70 hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#contacto" className="text-primary-foreground/70 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-medium mb-4">Especialidades</h4>
            <ul className="space-y-2">
              <li><a href="#servicios" className="text-primary-foreground/70 hover:text-white transition-colors">Gestión de Producto</a></li>
              <li><a href="#servicios" className="text-primary-foreground/70 hover:text-white transition-colors">Transformación Digital</a></li>
              <li><a href="#servicios" className="text-primary-foreground/70 hover:text-white transition-colors">Requisitos No Funcionales</a></li>
              <li><a href="#servicios" className="text-primary-foreground/70 hover:text-white transition-colors">Metodologías Ágiles</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/70">
            © {currentYear} Mario Jesús Castro Montenegro. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-primary-foreground/70 hover:text-white transition-colors text-sm">Términos</a>
            <a href="#" className="text-primary-foreground/70 hover:text-white transition-colors text-sm">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
