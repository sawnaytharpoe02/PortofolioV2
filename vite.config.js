import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/PortofolioV2/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === "UNRESOLVED_IMPORT") {
          console.error(`Could not resolve import: ${warning.source}`);
        }
        warn(warning);
      },
    },
  },
});
