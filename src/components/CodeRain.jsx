import { useEffect, useRef } from 'react';

const CodeRain = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const codeSnippets = [
      'const developer = "NICE-DEV";',
      'function createAwesome() {',
      '  return magic + code;',
      '}',
      'npm install creativity',
      'git commit -m "Added wow effect"',
      'console.log("Hello World!");',
      'import React from "react";',
      'export default Portfolio;',
      'const skills = ["HTML", "CSS", "JS"];',
      'while(learning) { grow(); }',
      'if(passionate) { code(); }',
      '// Building the future',
      'async function dream() {',
      '  await makeItReal();',
      '}',
      'const passion = Infinity;',
      'let creativity = unlimited;'
    ];

    const createCodeLine = () => {
      const codeLine = document.createElement('div');
      codeLine.className = 'code-line';
      codeLine.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      codeLine.style.top = Math.random() * 100 + '%';
      codeLine.style.animationDuration = (Math.random() * 10 + 5) + 's';
      codeLine.style.animationDelay = Math.random() * 2 + 's';
      
      container.appendChild(codeLine);

      // Supprimer l'élément après l'animation
      setTimeout(() => {
        if (container.contains(codeLine)) {
          container.removeChild(codeLine);
        }
      }, 15000);
    };

    // Créer des lignes de code périodiquement
    const interval = setInterval(createCodeLine, 2000);

    // Créer quelques lignes initiales
    for (let i = 0; i < 5; i++) {
      setTimeout(createCodeLine, i * 400);
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div ref={containerRef} className="code-rain" />;
};

export default CodeRain;