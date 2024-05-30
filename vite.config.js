import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/PortofolioV2/",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Suppress warnings that can be safely ignored
        if (warning.code !== "UNRESOLVED_IMPORT") warn(warning);
      },
    },
  },
});
