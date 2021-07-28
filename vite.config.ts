import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import typescript from '@rollup/plugin-typescript';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.tsx'),
      name: 'ViteSDK',
      formats: ['umd', 'cjs', 'es'],
      fileName: (format) => `vite-react.${format}.js`,
    },
    rollupOptions: {
      external: ['react'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'react',
        },
      },
      plugins: [
        typescript({
          tsconfig: 'tsconfig.json',
        }),
      ],
    },
  },
  plugins: [reactRefresh()],
});
