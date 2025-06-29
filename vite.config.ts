// vite.config.ts

import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    outDir: 'dist', // Ensure this is 'dist'
  },
	server: {
		port: 3000,
	},
	plugins: [tsConfigPaths(), tanstackStart()],
});
