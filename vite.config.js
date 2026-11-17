import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Local development uses /; production builds target the GitHub Pages project path.
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/el-imperio-monarca/' : '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
}));
