import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/server.ts'],
  format: ['esm'], // 👈 CRÍTICO
  target: 'node18',
  outDir: 'dist',

  clean: true,
  minify: true,
  splitting: false,
});
