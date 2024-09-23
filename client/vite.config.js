import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [react()],
  //   css: {
//     postcss: {
//       plugins: [tailwindcss()],
//     },
    server: {
    port: 5173,
    strictPort: true,
    host: true,
    origin: "http://localhost:5173",
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});