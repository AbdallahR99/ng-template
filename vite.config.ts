/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';
import angular from '@analogjs/vite-plugin-angular';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ['public/styles'],
      },
    },
  },
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
    alias: {
      '@': resolve(__dirname, 'src'),
      '@core': resolve(__dirname, 'src/app/core'),
      '@pages': resolve(__dirname, 'src/app/pages'),
      '@environments': resolve(__dirname, 'src/app/environments'),
      '@app': resolve(__dirname, 'src/app'),
      '@server': resolve(__dirname, 'src/server'),
      '@public': resolve(__dirname, 'public'),
    },
  },
  plugins: [
    analog({}),
    angular({
      inlineStylesExtension: 'scss',
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
