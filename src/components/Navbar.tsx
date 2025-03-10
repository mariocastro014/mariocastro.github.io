
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-apple py-4',
        scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-semibold">
          <span className="text-primary">Mario</span>
          <span className="text-accent"> Castro</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="nav-link">Inicio</a>
          <a href="#experiencia" className="nav-link">Experiencia</a>
          <a href="#servicios" className="nav-link">Servicios</a>
          <a href="#contacto" className="nav-link">Contacto</a>
        </nav>
        
        <a 
          href="#contacto" 
          className="hidden md:block px-5 py-2 rounded-full bg-accent text-white text-sm font-medium
          transition-all duration-300 hover:bg-accent/90 button-hover-effect"
        >
          Contáctame
        </a>
        
        <button className="md:hidden text-foreground">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
