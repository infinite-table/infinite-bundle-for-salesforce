import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // esbuild: {

  //   external: ["react", "react-dom"],
  // },
  optimizeDeps: {
    // exclude: ["react-dom"],
  },

  build: {
    // commonjsOptions: {
    //   // exclude: ["react"],
    // }
  },
});
