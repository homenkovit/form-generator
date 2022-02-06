import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const root = path.resolve(__dirname);

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(root, './src'),
      '@UIKit': path.resolve(root, './src/UIKit'),
      '@components': path.resolve(root, './src/components'),
    },
  },
  plugins: [react()],
});
