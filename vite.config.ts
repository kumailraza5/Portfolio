import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),   // 🔥 direct src use karo
      "@shared": path.resolve(process.cwd(), "shared"),
      "@assets": path.resolve(process.cwd(), "attached_assets"),
    },
  },
  root: process.cwd(), // ✅ root folder, client hatado
  base: "./",          // ✅ GitHub Pages ke liye relative path
  build: {
    outDir: path.resolve(process.cwd(), "dist"),  // build output
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(process.cwd(), "index.html"), // ✅ entry
    },
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
