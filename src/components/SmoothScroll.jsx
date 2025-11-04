import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SmoothScroll = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll fluide vers le haut à chaque changement de route
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  return null;
};

export default SmoothScroll;