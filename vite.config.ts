import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true,
      interval: 150,
    },
    hmr: {
      host: "localhost",
      protocol: "ws",
      clientPort: 5173,
    },
  },
});
