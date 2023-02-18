import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: ["index.html"],
      output: {
        format: "iife",
      },
      treeshake: false,
    },
  },
  esbuild: {
    minifyIdentifiers: false,
  },
});
