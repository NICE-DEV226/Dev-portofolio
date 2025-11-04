import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import GlitchText from '../components/GlitchText';
import NeonButton from '../components/NeonButton';

function Contact() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    const formData = new FormData(e.target);
    formData.append('access_key', '7a4cc908-de3e-4406-bd11-9855c0154a10'); 

    const jsonData = JSON.stringify(Object.fromEntries(formData));

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: jsonData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.target.reset();
        // Animation de succès
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: "📧",
      label: "Email",
      value: "nicedev226@gmail.com",
      href: "mailto:nicedev226@gmail.com",
      color: "#ff6b6b"
    },
    {
      icon: "📱",
      label: "Téléphone",
      value: "+226 03 58 29 06",
      href: "tel:+22603582906",
      color: "#4ecdc4"
    },
    {
      icon: "💼",
      label: "GitHub",
      value: "NICE-DEV226",
      href: "https://github.com/NICE-DEV226",
      color: "#45b7d1"
    },
    {
      icon: "🔗",
      label: "LinkedIn",
      value: "nice-dev",
      href: "https://www.linkedin.com/in/nice-dev-8a4606259/",
      color: "#6c5ce7"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen px-4 py-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <GlitchText>Contactez-moi</GlitchText>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00ddeb] to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-[#e0e1dd] max-w-2xl mx-auto font-mono">
            <span className="text-[#00ddeb]">const</span> collaboration = 
            <span className="text-[#00ddeb]"> yourIdeas</span> + 
            <span className="text-[#00ddeb]"> mySkills</span>;
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulaire */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="card scan-line"
          >
            <h3 className="text-3xl font-bold mb-8 text-center holographic">
              Envoyez-moi un message
            </h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Nom */}
              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="relative"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full p-4 rounded-lg bg-[#0d1b2a]/50 text-[#e0e1dd] border-2 border-[#00ddeb]/30 focus:border-[#00ddeb] transition-all duration-300 placeholder-[#e0e1dd]/50"
                  required
                />
                {focusedField === 'name' && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 w-4 h-4 bg-[#00ddeb] rounded-full"
                  />
                )}
              </motion.div>

              {/* Email */}
              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="relative"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full p-4 rounded-lg bg-[#0d1b2a]/50 text-[#e0e1dd] border-2 border-[#00ddeb]/30 focus:border-[#00ddeb] transition-all duration-300 placeholder-[#e0e1dd]/50"
                  required
                />
                {focusedField === 'email' && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 w-4 h-4 bg-[#00ddeb] rounded-full"
                  />
                )}
              </motion.div>

              {/* Sujet */}
              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="relative"
              >
                <input
                  type="text"
                  name="subject"
                  placeholder="Sujet"
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full p-4 rounded-lg bg-[#0d1b2a]/50 text-[#e0e1dd] border-2 border-[#00ddeb]/30 focus:border-[#00ddeb] transition-all duration-300 placeholder-[#e0e1dd]/50"
                  required
                />
                {focusedField === 'subject' && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 w-4 h-4 bg-[#00ddeb] rounded-full"
                  />
                )}
              </motion.div>

              {/* Message */}
              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="relative"
              >
                <textarea
                  name="message"
                  placeholder="Votre message"
                  rows="6"
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full p-4 rounded-lg bg-[#0d1b2a]/50 text-[#e0e1dd] border-2 border-[#00ddeb]/30 focus:border-[#00ddeb] transition-all duration-300 placeholder-[#e0e1dd]/50 resize-none"
                  required
                />
                {focusedField === 'message' && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 w-4 h-4 bg-[#00ddeb] rounded-full"
                  />
                )}
              </motion.div>

              {/* Bouton d'envoi */}
              <div className="text-center">
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.05 }}
                  whileTap={{ scale: loading ? 1 : 0.95 }}
                  className={`neon-button px-8 py-4 text-lg font-semibold ${
                    loading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-[#00ddeb] border-t-transparent rounded-full"
                      />
                      Envoi en cours...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      🚀 Envoyer le message
                    </span>
                  )}
                </motion.button>
              </div>
            </form>

            {/* Status messages */}
            {status === 'success' && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mt-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-center"
              >
                <div className="text-4xl mb-2">✅</div>
                <p className="text-green-400 font-semibold">Message envoyé avec succès !</p>
                <p className="text-sm text-green-300">Je vous répondrai dans les plus brefs délais.</p>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mt-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-center"
              >
                <div className="text-4xl mb-2">❌</div>
                <p className="text-red-400 font-semibold">Erreur lors de l'envoi</p>
                <p className="text-sm text-red-300">Veuillez réessayer ou me contacter directement.</p>
              </motion.div>
            )}
          </motion.div>

          {/* Informations de contact */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-center mb-8 holographic">
              Autres moyens de contact
            </h3>

            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : '_self'}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5
                }}
                className="card p-6 flex items-center space-x-4 cursor-pointer group"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl"
                >
                  {method.icon}
                </motion.div>
                
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-[#00ddeb] mb-1">
                    {method.label}
                  </h4>
                  <p className="text-[#e0e1dd] group-hover:text-white transition-colors">
                    {method.value}
                  </p>
                </div>

                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  className="text-[#00ddeb] text-2xl"
                >
                  →
                </motion.div>

                {/* Effet de lumière */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg"
                  style={{
                    background: `radial-gradient(circle at center, ${method.color}, transparent 70%)`
                  }}
                />
              </motion.a>
            ))}

            {/* Disponibilité */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="card p-6 text-center"
            >
              <div className="text-3xl mb-4">⏰</div>
              <h4 className="text-xl font-semibold text-[#00ddeb] mb-2">
                Disponibilité
              </h4>
              <p className="text-[#e0e1dd] font-mono">
                <span className="text-[#00ddeb]">const</span> availability = {"{"}
                <br />
                &nbsp;&nbsp;lundi_vendredi: <span className="text-green-400">"9h-18h"</span>,
                <br />
                &nbsp;&nbsp;weekend: <span className="text-yellow-400">"sur demande"</span>
                <br />
                {"}"};
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;