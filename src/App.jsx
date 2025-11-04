import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ParticleBackground from './components/ParticleBackground';
import SmoothScroll from './components/SmoothScroll';
import LoadingScreen from './components/LoadingScreen';
import PageTransition from './components/PageTransition';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Gestion de la navigation fluide
  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Préchargement des ressources
  useEffect(() => {
    const preloadResources = async () => {
      // Simuler le chargement des ressources
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    preloadResources();
  }, []);

  const navItems = [
    { path: '/', label: 'Accueil', icon: '🏠' },
    { path: '/about', label: 'À propos', icon: '👨‍💻' },
    { path: '/projects', label: 'Projets', icon: '🚀' },
    { path: '/contact', label: 'Contact', icon: '📧' }
  ];

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d1b2a] to-[#1b263b] text-[#e0e1dd] font-['Inter'] relative">
      <ParticleBackground />
      
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0d1b2a]/95 backdrop-blur-lg shadow-2xl' : 'bg-[#0d1b2a]/80 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center"
            >
              <Link to="/" className="flex items-center space-x-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 border-2 border-[#00ddeb] rounded-lg flex items-center justify-center"
                >
                  <span className="text-[#00ddeb] font-bold">N</span>
                </motion.div>
                <h1 className="text-2xl font-bold text-[#00ddeb] font-mono">
                  NICE-DEV
                </h1>
              </Link>
            </motion.div>

            {/* Navigation Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsNavigating(true)}
                    className={`relative px-4 py-2 text-lg font-medium transition-all duration-300 group ${
                      location.pathname === item.path
                        ? 'text-[#00ddeb]'
                        : 'text-[#e0e1dd] hover:text-[#00ddeb]'
                    }`}
                  >
                    <span className="flex items-center space-x-2">
                      <span className="text-sm">{item.icon}</span>
                      <span>{item.label}</span>
                    </span>
                    
                    {/* Effet de soulignement animé */}
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00ddeb]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: location.pathname === item.path ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Effet de brillance au hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00ddeb]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Menu Hamburger Mobile */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#00ddeb] focus:outline-none p-2"
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    />
                  </svg>
                </motion.div>
              </motion.button>
            </div>
          </div>

          {/* Menu Mobile */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-[#0d1b2a]/95 backdrop-blur-lg border-t border-[#00ddeb]/20"
              >
                <div className="flex flex-col space-y-2 py-4 px-6">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                          location.pathname === item.path
                            ? 'bg-[#00ddeb]/20 text-[#00ddeb] border border-[#00ddeb]/30'
                            : 'text-[#e0e1dd] hover:bg-[#00ddeb]/10 hover:text-[#00ddeb]'
                        }`}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsNavigating(true);
                        }}
                      >
                        <span className="text-xl">{item.icon}</span>
                        <span>{item.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Indicateur de navigation */}
      <AnimatePresence>
        {isNavigating && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed top-16 left-0 w-full h-1 bg-gradient-to-r from-[#00ddeb] to-[#38BDF8] z-50 origin-left"
          />
        )}
      </AnimatePresence>

      {/* Contenu principal avec transitions améliorées */}
      <div className="pt-16 relative z-10">
        <SmoothScroll />
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </PageTransition>
        </AnimatePresence>
      </div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 w-12 h-12 bg-[#00ddeb] text-[#0d1b2a] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50"
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;