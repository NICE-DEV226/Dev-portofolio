import { motion } from 'framer-motion';

function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="card max-w-5xl bg-[#1b263b]/80 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Mes Réalisations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="card bg-[#0d1b2a]/50 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-2">Portfolio Moderne</h3>
            <p className="text-sm mb-4">Un portfolio personnel moderne et responsive, conçu pour présenter mes compétences.</p>
            <a href="https://dark-dev-portofolio.netlify.app/" target="_blank" className="text-[#00ddeb] hover:underline">Voir le projet</a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="card bg-[#0d1b2a]/50 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-2">Site Vitrine Agence Immobilière</h3>
            <p className="text-sm mb-4">Un site vitrine élégant pour une agence immobilière, avec un design intuitif.</p>
            <a href="https://wendguudi-website.netlify.app/" target="_blank" className="text-[#00ddeb] hover:underline">Voir le projet</a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="card bg-[#0d1b2a]/50 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-2">Bot WhatsApp (Collaboration)</h3>
            <p className="text-sm mb-4">Collaboration sur un projet de bot WhatsApp en JavaScript pour automatiser des interactions.</p>
            <a href="https://github.com/DARKMAN226/SPIRITY-XMD-V2" target="_blank" className="text-[#00ddeb] hover:underline">Voir le code</a>
          </motion.div>
                    <motion.div
            whileHover={{ scale: 1.05 }}
            className="card bg-[#0d1b2a]/50 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-2">Site Web Stylisé</h3>
            <p className="text-sm mb-4">Un site qui stylise les noms et des phrases en utilisant des animations CSS et JavaScript.</p>
            <a href="https://nicestylers.netlify.app/" target="_blank" className="text-[#00ddeb] hover:underline">Voir le projet</a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="card bg-[#0d1b2a]/50 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-2">NICE-OBFUSCATOR</h3>
            <p className="text-sm mb-4">Un Outils qui permet d'obfusquer un code JS.</p>
            <a href="https://nice-obf.netlify.app/" target="_blank" className="text-[#00ddeb] hover:underline">Voir le projet</a>
          </motion.div>
           <motion.div
            whileHover={{ scale: 1.05 }}
            className="card bg-[#0d1b2a]/50 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-2">NICE-AI</h3>
            <p className="text-sm mb-4">Une chatIA qui se nomme NICE-AI basé sur Gemini allez-y profiter 🍷 </p>
            <a href="https://nice-ai.netlify.app/" target="_blank" className="text-[#00ddeb] hover:underline">Voir le projet</a>
          </motion.div>
          
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
