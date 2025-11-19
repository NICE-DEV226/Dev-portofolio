import { motion } from 'framer-motion';
import { useState } from 'react';
import GlitchText from '../components/GlitchText';
import NeonButton from '../components/NeonButton';

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Portfolio Moderne",
      description: "Un portfolio personnel moderne et responsive, conçu pour présenter mes compétences avec des animations fluides.",
      tech: ["React", "CSS3", "Framer Motion"],
      link: "https://dark-dev-portofolio.netlify.app/",
      type: "live",
      icon: "🎨",
      color: "#ff6b6b"
    },
    {
      id: 2,
      title: "Site Vitrine Agence Immobilière",
      description: "Un site vitrine élégant pour une agence immobilière, avec un design intuitif et une expérience utilisateur optimisée.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      link: "https://wendguudi-website.netlify.app/",
      type: "live",
      icon: "🏠",
      color: "#4ecdc4"
    },
    {
      id: 3,
      title: "Bot WhatsApp (Collaboration)",
      description: "Collaboration sur un projet de bot WhatsApp en JavaScript pour automatiser des interactions et améliorer l'expérience utilisateur.",
      tech: ["Node.js", "JavaScript", "WhatsApp API"],
      link: "https://github.com/DARKMAN226/SPIRITY-XMD-V2",
      type: "github",
      icon: "🤖",
      color: "#45b7d1"
    },
    {
      id: 4,
      title: "Site Web Stylisé",
      description: "Un site qui stylise les noms et des phrases en utilisant des animations CSS avancées et JavaScript interactif.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      link: "https://nicestylers.netlify.app/",
      type: "live",
      icon: "✨",
      color: "#f9ca24"
    },
    {
      id: 5,
      title: "NICE-OBFUSCATOR",
      description: "Un outil puissant qui permet d'obfusquer du code JavaScript pour protéger la propriété intellectuelle.",
      tech: ["JavaScript", "Node.js", "Algorithms"],
      link: "https://nice-obf.netlify.app/",
      type: "live",
      icon: "🔒",
      color: "#6c5ce7"
    },
    {
      id: 6,
      title: "NICE-AI",
      description: "Une intelligence artificielle conversationnelle basée sur Gemini, offrant une expérience de chat interactive et intelligente.",
      tech: ["React", "Gemini API", "AI/ML"],
      link: "https://nice-ai.netlify.app/",
      type: "live",
      icon: "🧠",
      color: "#a29bfe"
    },
    {
      id: 7,
      title: "NICE-BOT Telegram",
      description: "Un bot Telegram très utile et intuitif développé en Python, utilisant l'API Telegram pour automatiser diverses tâches et interactions.",
      tech: ["Python", "Telegram API", "Automation"],
      link: "https://github.com/NICE-DEV226/NICE-BOT_telegrame.git",
      type: "github",
      icon: "📱",
      color: "#0088cc"
    }
    {
      id: 8,
      title: "NICE-DOWNS",
      description: "Téléchargez facilement vos vidéos et images depuis TikTok, Facebook, Twitter et Instagram etc...... Simple, rapide et gratuit.",
      tech: ["React", "CSS3", "Framer Motion"],
      link: "https://nice-downs.vercel.app/",
      type: "live",
      icon: "🎨",
      color: "#ff6b6b"
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen px-4 py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <GlitchText>Mes Réalisations</GlitchText>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00ddeb] to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-[#e0e1dd] max-w-2xl mx-auto font-mono">
            <span className="text-[#00ddeb]">const</span> projects = myPassion.map(idea =>
            <span className="text-[#00ddeb]"> realityCode</span>);
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -20,
                rotateX: 5,
                rotateY: 5,
                scale: 1.05
              }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="card relative overflow-hidden cursor-pointer group"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Effet de lumière au hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${project.color}, transparent 70%)`
                }}
              />

              {/* Icône du projet */}
              <motion.div
                animate={hoveredProject === project.id ? { rotate: 360, scale: 1.2 } : { rotate: 0, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-6xl mb-4 text-center"
              >
                {project.icon}
              </motion.div>

              {/* Contenu */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-[#00ddeb] group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                <p className="text-[#e0e1dd] mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                      className="px-3 py-1 bg-[#0d1b2a] text-[#00ddeb] text-xs rounded-full border border-[#00ddeb]/30 hover:border-[#00ddeb] transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Bouton d'action */}
                <div className="flex justify-center">
                  <NeonButton
                    href={project.link}
                    size="sm"
                    className="w-full justify-center"
                  >
                    {project.type === 'github' ? (
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                        Code Source
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        🚀 Voir le projet
                      </span>
                    )}
                  </NeonButton>
                </div>
              </div>

              {/* Effet de scan line */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00ddeb] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
        >
          <div className="card max-w-2xl mx-auto p-8">
            <h3 className="text-3xl font-bold mb-4 holographic">
              Envie de collaborer ?
            </h3>
            <p className="text-[#e0e1dd] mb-6 font-mono">
              <span className="text-[#00ddeb]">if</span>(interested) {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-[#00ddeb]">contact</span>(me);
              <br />
              {"}"}
            </p>
            <NeonButton href="/contact" size="lg">
              💬 Discutons de votre projet
            </NeonButton>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Projects;
