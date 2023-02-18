export default {
  build: {
    rollupOptions: {
      input: ["index.html"],
      // output: {
      //   dir: "dist",
      //   format: "iife",
      // },
      output: {
        format: "iife",
      },
      treeshake: false,
    },
  },
  esbuild: {
    minifyIdentifiers: false,
  },
};
