import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Indique que le site est servi à la racine du domaine
  server: {
    host: true,
    port: 5173,
  },
  plugins: [react()],
});
