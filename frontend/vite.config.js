import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Define the output directory for the build
    outDir: '.build', // This will output the build files into the .build folder
  },
});
