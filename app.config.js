// app.config.js

import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    },
    port: 3000,
  },
  build: {
    outDir: './.output' // Explicitly set output directory
  },
  plugins: [tsConfigPaths(), tanstackStart()],
})