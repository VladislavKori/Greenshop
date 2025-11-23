import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from "path";

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: "127.0.0.1"
  },
  resolve: {
    alias: {
      "@ui": path.resolve(__dirname, "src/ui"),
      "@application": path.resolve(__dirname, "src/application"),
    },
  },
});
