import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gradient-to-br from-[#0d1b2a] to-[#1b263b] flex items-center justify-center z-50"
    >
      <div className="text-center">
        {/* Logo animé */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-[#00ddeb] border-t-transparent rounded-full mx-auto mb-8"
        />
        
        {/* Texte de chargement */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#00ddeb] mb-4 font-mono"
        >
          NICE-DEV
        </motion.h1>
        
        {/* Barre de progression */}
        <div className="w-64 h-2 bg-[#1b263b] rounded-full overflow-hidden mx-auto mb-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
            className="h-full bg-gradient-to-r from-[#00ddeb] to-[#38BDF8] rounded-full"
          />
        </div>
        
        {/* Pourcentage */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-[#e0e1dd] font-mono"
        >
          {progress}%
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;