import { useState, useEffect } from 'react';

const GlitchText = ({ children, className = "", trigger = "hover" }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    if (trigger === "auto") {
      const interval = setInterval(() => {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 500);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [trigger]);

  const handleMouseEnter = () => {
    if (trigger === "hover") {
      setIsGlitching(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === "hover") {
      setIsGlitching(false);
    }
  };

  return (
    <span
      className={`${isGlitching ? 'glitch' : ''} ${className}`}
      data-text={children}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </span>
  );
};

export default GlitchText;