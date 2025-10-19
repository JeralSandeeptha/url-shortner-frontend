/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true, // allows `describe`, `it`, `expect` without imports
    environment: 'jsdom', // simulates browser environment
    setupFiles: './src/setupTests.ts', // optional, for global setup
    coverage: {
      reporter: ['text', 'json', 'html'], // optional code coverage
    },
  },
});
