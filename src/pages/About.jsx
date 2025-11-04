import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import GlitchText from '../components/GlitchText';

function About() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const skillCategories = {
    languages: [
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '#e34c26' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: '#1572b6' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#f7df1e' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178c6' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776ab' },
      { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg', color: '#0175c2' }
    ],
    frameworks: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61dafb' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#000000' },
      { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', color: '#02569b' },
      { name: 'Tailwind CSS', icon: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDggNDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzM4QkRGOCIgZD0iTTI0IDEwLjhjLTYuNCAwLTEwLjQgMy4yLTEyIDkuNiAyLjQtMy4yIDUuMi00LjQgOC40LTMuNiAxLjguNCAzIDEuNiA0LjQgMy4yIDIuMiAyLjQgNC44IDQuOCA5LjYgNC44IDYuNCAwIDEwLjQtMy4yIDEyLTkuNi0yLjQgMy4yLTUuMiA0LjQtOC40IDMuNi0xLjgtLjQtMy0xLjYtNC40LTMuMi0yLjItMi40LTQuOC00LjgtOS42LTQuOFoiLz48L3N2Zz4=', color: '#38BDF8' },
      { name: 'Framer Motion', icon: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDEwMEw1MCA1MCAxMDAgMTAwSDBWMFoiIGZpbGw9IiMwMDU1RkYiLz48L3N2Zz4=', color: '#0055FF' }
    ],
    tools: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#f05032' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: '#181717' },
      { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg', color: '#ff6c37' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', color: '#007acc' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', color: '#f24e1e' },
      { name: 'Netlify', icon: 'https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg', color: '#00c7b7' }
    ]
  };

  const categoryTitles = {
    languages: { title: 'Langages de Programmation', icon: '💻', color: '#ff6b6b' },
    frameworks: { title: 'Frameworks & Librairies', icon: '⚡', color: '#4ecdc4' },
    tools: { title: 'Outils & Technologies', icon: '🛠️', color: '#45b7d1' }
  };

  // Préchargement des images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = Object.values(skillCategories)
        .flat()
        .filter(skill => skill.icon.startsWith('http'))
        .map(skill => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = resolve;
            img.src = skill.icon;
          });
        });

      await Promise.all(imagePromises);
      setImagesLoaded(true);
    };

    preloadImages();
  }, []);

  // Variants pour animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen px-4 py-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <GlitchText>À propos de moi</GlitchText>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00ddeb] to-transparent mx-auto"></div>
        </motion.div>

        {/* Description */}
        <motion.div
          variants={itemVariants}
          className="card scan-line max-w-4xl mx-auto mb-20"
        >
          <div className="space-y-6">
            <div className="font-mono text-[#00ddeb] text-lg">
              <span className="text-[#e0e1dd]">const</span> aboutMe = {"{"}
            </div>

            <div className="pl-6 space-y-4 text-lg">
              <p>
                <span className="text-[#00ddeb] font-mono">name:</span>
                <span className="text-[#e0e1dd]"> "NICE-DEV",</span>
              </p>
              <p>
                <span className="text-[#00ddeb] font-mono">passion:</span>
                <span className="text-[#e0e1dd]"> "Créer des interfaces modernes et intuitives",</span>
              </p>
              <p>
                <span className="text-[#00ddeb] font-mono">mission:</span>
                <span className="text-[#e0e1dd]"> "Transformer les idées en réalité digitale",</span>
              </p>
              <p>
                <span className="text-[#00ddeb] font-mono">objectif:</span>
                <span className="text-[#e0e1dd]"> "Devenir développeur fullstack expert",</span>
              </p>
              <p>
                <span className="text-[#00ddeb] font-mono">philosophy:</span>
                <span className="text-[#e0e1dd]"> "Code with passion, design with purpose"</span>
              </p>
            </div>

            <div className="font-mono text-[#00ddeb] text-lg">
              {"}"};
            </div>
          </div>
        </motion.div>

        {/* Tableaux des compétences */}
        <div className="space-y-12">
          {Object.entries(skillCategories).map(([categoryKey, skills]) => (
            <motion.div
              key={categoryKey}
              variants={itemVariants}
              className="space-y-6"
            >
              {/* Titre de catégorie */}
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center space-x-3 mb-4"
                >
                  <span className="text-3xl">{categoryTitles[categoryKey].icon}</span>
                  <h3 className="text-2xl md:text-3xl font-bold holographic">
                    {categoryTitles[categoryKey].title}
                  </h3>
                </motion.div>
                <div
                  className="w-16 h-1 mx-auto rounded-full"
                  style={{ background: categoryTitles[categoryKey].color }}
                />
              </div>

              {/* Tableau simple et responsive */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="card overflow-hidden"
              >
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[500px]">
                    <tbody>
                      {/* Organiser en lignes de 3 colonnes */}
                      {Array.from({ length: Math.ceil(skills.length / 3) }, (_, rowIndex) => (
                        <tr key={rowIndex} className="border-b border-[#1b263b]/30 last:border-b-0">
                          {skills.slice(rowIndex * 3, (rowIndex + 1) * 3).map((skill, colIndex) => (
                            <td key={skill.name} className="py-4 px-4 w-1/3">
                              <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ 
                                  duration: 0.4, 
                                  delay: 0.3 + (rowIndex * 3 + colIndex) * 0.1 
                                }}
                                whileHover={{ 
                                  scale: 1.05,
                                  y: -2
                                }}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#00ddeb]/5 transition-all duration-300 cursor-pointer group"
                              >
                                <motion.img
                                  whileHover={{ rotate: 180 }}
                                  transition={{ duration: 0.3 }}
                                  src={skill.icon}
                                  alt={skill.name}
                                  className="w-8 h-8 flex-shrink-0"
                                  style={{ 
                                    filter: `drop-shadow(0 0 6px ${skill.color}40)`,
                                    opacity: imagesLoaded ? 1 : 0.5
                                  }}
                                  loading="eager"
                                />
                                <span 
                                  className="text-base font-medium text-[#e0e1dd] group-hover:text-[#00ddeb] transition-colors duration-200 truncate"
                                >
                                  {skill.name}
                                </span>
                              </motion.div>
                            </td>
                          ))}
                          {/* Remplir les cellules vides si nécessaire */}
                          {skills.slice(rowIndex * 3, (rowIndex + 1) * 3).length < 3 && 
                            Array.from({ length: 3 - skills.slice(rowIndex * 3, (rowIndex + 1) * 3).length }, (_, emptyIndex) => (
                              <td key={`empty-${emptyIndex}`} className="py-4 px-4 w-1/3"></td>
                            ))
                          }
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          variants={containerVariants}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Lignes de code", value: "15K+", icon: "📝", color: "#ff6b6b" },
            { label: "Projets réalisés", value: "7+", icon: "🚀", color: "#4ecdc4" },
            { label: "Technologies maîtrisées", value: "17+", icon: "⚡", color: "#45b7d1" },
            { label: "Heures de code", value: "500+", icon: "⏰", color: "#f9ca24" }
          ].map((stat, statIndex) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.5,
                delay: 1.2 + statIndex * 0.1,
                type: "spring"
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="card text-center p-6 cursor-pointer group"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"
                style={{
                  background: `radial-gradient(circle at center, ${stat.color}, transparent 70%)`
                }}
              />

              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.4 }}
                  className="text-4xl mb-3"
                >
                  {stat.icon}
                </motion.div>
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-[#e0e1dd] group-hover:text-white transition-colors duration-200">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;