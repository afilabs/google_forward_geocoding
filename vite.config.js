import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
   // eslint-disable-next-line no-undef
   const env = loadEnv(mode, process.cwd(), '');

   return {
      plugins: [react()],
      resolve: { alias: [{ find: /^~/, replacement: '/src' }] },
      server: {
         port: env.VITE_PORT,
      },
   };
});
