
import React from "react";
import { Link } from "react-router-dom";
import TransitionEffect from "@/components/TransitionEffect";

const NotFound: React.FC = () => {
  return (
    <TransitionEffect>
      <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
        <div className="text-center">
          <span className="inline-block px-3 py-1 mb-5 text-xs font-medium text-accent bg-accent/10 rounded-full">
            Error 404
          </span>
          <h1 className="text-6xl font-bold mb-4">Página no encontrada</h1>
          <p className="text-xl text-foreground/70 mb-8 max-w-md mx-auto">
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </p>
          <Link 
            to="/" 
            className="px-8 py-3 rounded-full bg-accent text-white font-medium 
            transition-all duration-300 hover:bg-accent/90 inline-block"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </TransitionEffect>
  );
};

export default NotFound;
