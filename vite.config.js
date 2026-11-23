import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Para GitHub Pages, troque base para '/NOME-DO-REPO/'.
// Para Vercel / Render, mantenha '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
