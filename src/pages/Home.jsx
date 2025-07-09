import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00ddeb] to-[#1b263b]">
          Bienvenue sur mon Portfolio
        </h2>
        <p className="text-xl md:text-2xl mb-8">Développeur Frontend passionné, en route vers le Fullstack</p>
        <a
          href="/contact"
          className="inline-block bg-[#00ddeb] text-[#0d1b2a] px-8 py-4 rounded-full font-semibold hover:bg-[#00b7c3] transition-all duration-300 transform hover:scale-105"
        >
          Me contacter
        </a>
      </div>
    </motion.section>
  );
}

export default Home;