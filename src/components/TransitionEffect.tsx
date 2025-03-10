
import React, { useEffect, useState } from 'react';

interface TransitionEffectProps {
  children: React.ReactNode;
}

const TransitionEffect: React.FC<TransitionEffectProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay for a smoother transition
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`page-transition-content ${
        isVisible 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform translate-y-4'
      }`}
    >
      {children}
    </div>
  );
};

export default TransitionEffect;
