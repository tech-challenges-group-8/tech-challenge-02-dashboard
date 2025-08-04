import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "dashboard",
      filename: "remoteEntry.js",
      exposes: {
        "./DashboardApp": "./src/pages/Dashboard.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5173,
  },
  preview: {
    port: 5173
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
