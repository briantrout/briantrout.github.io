// app.config.js

import { defineConfig } from "vite"

export default defineConfig({
  server: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    },
  },
})