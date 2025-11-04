import { motion } from 'framer-motion';

const NeonButton = ({ 
  children, 
  onClick, 
  href, 
  className = "", 
  variant = "primary",
  size = "md" 
}) => {
  const baseClasses = "neon-button relative inline-block text-center cursor-pointer transition-all duration-300";
  
  const variants = {
    primary: "border-[#00ddeb] text-[#00ddeb] hover:bg-[#00ddeb] hover:text-[#0d1b2a]",
    secondary: "border-[#e0e1dd] text-[#e0e1dd] hover:bg-[#e0e1dd] hover:text-[#0d1b2a]",
    danger: "border-[#ff0040] text-[#ff0040] hover:bg-[#ff0040] hover:text-[#0d1b2a]"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const buttonContent = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={classes}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
};

export default NeonButton;