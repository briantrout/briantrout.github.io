// vite.config.ts

import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    outDir: './.output'
  },
	server: {
		port: 3000,
	},
	plugins: [tsConfigPaths(), tanstackStart()],
});
