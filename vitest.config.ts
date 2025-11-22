import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/tests/e2e/**', // Exclude Playwright tests
      '**/*.e2e.{test,spec}.{js,jsx,ts,tsx}'
    ],
    include: [
      '**/*.{test,spec}.{js,jsx,ts,tsx}',
      '!**/tests/e2e/**' // Explicitly exclude e2e tests
    ]
  },
});