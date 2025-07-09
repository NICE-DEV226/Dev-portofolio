import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d1b2a] to-[#1b263b] text-[#e0e1dd] font-['Inter']">
      <nav className="fixed top-0 w-full bg-[#0d1b2a]/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-[#00ddeb]">NICE-DEV</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="nav-link text-lg font-medium hover:text-[#00ddeb] hover:scale-110 transition-all duration-300">Accueil</Link>
              <Link to="/about" className="nav-link text-lg font-medium hover:text-[#00ddeb] hover:scale-110 transition-all duration-300">À propos</Link>
              <Link to="/projects" className="nav-link text-lg font-medium hover:text-[#00ddeb] hover:scale-110 transition-all duration-300">Projets</Link>
              <Link to="/contact" className="nav-link text-lg font-medium hover:text-[#00ddeb] hover:scale-110 transition-all duration-300">Contact</Link>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#00ddeb] focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden bg-[#0d1b2a]/90">
              <div className="flex flex-col space-y-4 py-4 px-6">
                <Link to="/" className="nav-link text-lg font-medium hover:text-[#00ddeb]" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
                <Link to="/about" className="nav-link text-lg font-medium hover:text-[#00ddeb]" onClick={() => setIsMenuOpen(false)}>À propos</Link>
                <Link to="/projects" className="nav-link text-lg font-medium hover:text-[#00ddeb]" onClick={() => setIsMenuOpen(false)}>Projets</Link>
                <Link to="/contact" className="nav-link text-lg font-medium hover:text-[#00ddeb]" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;