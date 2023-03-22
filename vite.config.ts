import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/countries/',
  resolve: {
    alias: {
      components: '/src/components',
      pages: '/src/pages',
      constants: '/src/constants',
      modules: '/src/modules',
      store: '/src/store',
      sagas: '/src/sagas',
      api: '/src/api',
      utils: '/src/utils',
    },
  },
});
