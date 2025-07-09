import { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

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
        setStatus('Message envoyé avec succès !');
        e.target.reset();
      } else {
        setStatus(`Erreur : ${data.message}`);
      }
    } catch (error) {
      setStatus('Erreur lors de l’envoi. Veuillez réessayer.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="card max-w-3xl text-center bg-[#1b263b]/80 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Contactez-moi</h2>
        <p className="text-lg md:text-xl mb-6">
          Envie de collaborer ou d'en savoir plus ? Remplissez le formulaire ci-dessous !
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              className="p-3 rounded-lg bg-[#0d1b2a]/50 text-[#e0e1dd] border border-[#00ddeb]/30 focus:outline-none focus:border-[#00ddeb] transition-all"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              className="p-3 rounded-lg bg-[#0d1b2a]/50 text-[#e0e1dd] border border-[#00ddeb]/30 focus:outline-none focus:border-[#00ddeb] transition-all"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Sujet"
              className="p-3 rounded-lg bg-[#0d1b2a]/50 text-[#e0e1dd] border border-[#00ddeb]/30 focus:outline-none focus:border-[#00ddeb] transition-all"
              required
            />
            <textarea
              name="message"
              placeholder="Votre message"
              rows="5"
              className="p-3 rounded-lg bg-[#0d1b2a]/50 text-[#e0e1dd] border border-[#00ddeb]/30 focus:outline-none focus:border-[#00ddeb] transition-all"
              required
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className={`bg-[#00ddeb] text-[#0d1b2a] px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#00b7c3]'
              }`}
            >
              {loading ? 'Envoi...' : 'Envoyer'}
            </button>
          </div>
        </form>
        {status && <p className="text-lg text-[#00ddeb] mt-4">{status}</p>}
        <p className="text-lg mt-6">
          Email:{' '}
          <a href="mailto:nicedev226@gmail.com" className="text-[#00ddeb] hover:underline">
            nicedev226@gmail.com
          </a>
        </p>
        <p className="text-lg">
          Téléphone:{' '}
          <a href="tel:+22603582906" className="text-[#00ddeb] hover:underline">
            +226 03 58 29 06
          </a>
        </p>
        <p className="text-lg">
          GitHub:{' '}
          <a
            href="https://github.com/NICE-DEV226"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00ddeb] hover:underline"
          >
            github.com/NICE-DEV226
          </a>
        </p>
        <p className="text-lg">
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/nice-dev-8a4606259/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00ddeb] hover:underline"
          >
            linkedin.com/in/nice-dev
          </a>
        </p>
      </div>
    </motion.section>
  );
}

export default Contact;
