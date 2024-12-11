import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Define the output directory for the build
    outDir: '.build', // Ensure this is set to 'dist'
  },
});
