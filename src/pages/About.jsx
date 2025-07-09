import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="card max-w-4xl text-center bg-[#1b263b]/80 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">À propos de moi</h2>
        <p className="text-lg md:text-xl mb-6">
          Je suis NICE-DEV, un développeur frontend passionné par la création d'interfaces modernes, responsives et intuitives. Je maîtrise HTML, CSS, JavaScript, React et Flutter, et je m'oriente vers le développement fullstack pour concevoir des solutions complètes et performantes.
        </p>
        <div className="flex justify-center flex-wrap gap-4">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="tech-logo w-12 h-12 hover:scale-125 transition-transform duration-300" alt="HTML5" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="tech-logo w-12 h-12 hover:scale-125 transition-transform duration-300" alt="CSS3" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="tech-logo w-12 h-12 hover:scale-125 transition-transform duration-300" alt="JavaScript" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="tech-logo w-12 h-12 hover:scale-125 transition-transform duration-300" alt="React" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" className="tech-logo w-12 h-12 hover:scale-125 transition-transform duration-300" alt="Flutter" />
        </div>
      </div>
    </motion.section>
  );
}

export default About;