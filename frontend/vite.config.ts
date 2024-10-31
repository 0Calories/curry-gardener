import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { sentryVitePlugin } from '@sentry/vite-plugin';

const env = loadEnv('', process.cwd(), '');

export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: env.VITE_SENTRY_ORG,
      project: env.VITE_SENTRY_PROJECT,
      reactComponentAnnotation: { enabled: true },
    }),
  ],

  build: {
    sourcemap: true,
  },
});
