import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// `base: "./"` makes the build work on GitHub Pages regardless of repo name
// (relative asset paths). Safe here because the site has no client-side routing.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
