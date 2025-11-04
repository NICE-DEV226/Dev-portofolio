import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import TypingEffect from '../components/TypingEffect';
import CodeRain from '../components/CodeRain';
import GlitchText from '../components/GlitchText';
import NeonButton from '../components/NeonButton';

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const typingTexts = [
    "Développeur Frontend passionné",
    "Créateur d'expériences digitales",
    "En route vers le Fullstack",
    "Architecte du web moderne"
  ];

  return (
    <>
      <ParticleBackground />
      <CodeRain />
      
      {/* Curseur personnalisé */}
      <div 
        className="fixed w-4 h-4 bg-[#00ddeb] rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transition: 'all 0.1s ease'
        }}
      />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="min-h-screen flex items-center justify-center px-4 relative z-10"
      >
        <div className="text-center max-w-4xl">
          {/* Titre principal avec effet holographique */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-2xl md:text-4xl font-mono text-[#00ddeb] mb-4">
              <span className="text-[#e0e1dd]">const</span> developer = {"{"}
            </h1>
            <h2 className="text-6xl md:text-8xl font-bold mb-4 holographic">
              <GlitchText trigger="auto">NICE-DEV</GlitchText>
            </h2>
            <h3 className="text-2xl md:text-4xl font-mono text-[#00ddeb]">
              {"}"};
            </h3>
          </motion.div>

          {/* Effet de typing */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mb-12"
          >
            <div className="text-xl md:text-3xl mb-4 font-mono">
              <span className="text-[#e0e1dd]">console.log("</span>
              <TypingEffect 
                texts={typingTexts}
                speed={100}
                deleteSpeed={50}
                pauseTime={2000}
                className="text-[#00ddeb]"
              />
              <span className="text-[#e0e1dd]">");</span>
            </div>
          </motion.div>

          {/* Stats animées */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {[
              { label: "Projets", value: "6+", icon: "🚀" },
              { label: "Technologies", value: "5+", icon: "⚡" },
              { label: "Expérience", value: "2ans", icon: "💻" },
              { label: "Passion", value: "∞", icon: "❤️" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.1, rotateY: 180 }}
                className="card text-center p-4 cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-[#00ddeb] mb-1">{stat.value}</div>
                <div className="text-sm text-[#e0e1dd]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Boutons d'action */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <NeonButton href="/contact" size="lg">
              <span className="flex items-center gap-2">
                💬 Me contacter
              </span>
            </NeonButton>
            
            <NeonButton href="/projects" variant="secondary" size="lg">
              <span className="flex items-center gap-2">
                🎯 Voir mes projets
              </span>
            </NeonButton>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-[#00ddeb] text-2xl"
            >
              ↓
            </motion.div>
            <div className="text-sm text-[#e0e1dd] mt-2">Scroll pour explorer</div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

export default Home;