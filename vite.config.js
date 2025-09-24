import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const aliases = {
  // "@": "src",
  "@components": "src/components",
  "@pages": "src/pages",
  "@hooks": "src/hooks",
  "@store": "src/store",
  "@utils": "src/utils",
  "@assets": "src/assets",
  "@types": "src/types",
  "@services": "src/services",
  "@constants": "src/constants",
  "@imports": "src/imports",
  "@layouts": "src/layouts",
  "@styles": "src/styles",
  "@validations": "src/validations",
};

const resolveAliases = Object.entries(aliases).reduce((acc, [key, value]) => {
  acc[key] = path.resolve(__dirname, value);
  return acc;
}, {});

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    tailwindcss(),
    react(),
  ],
  resolve: {
    alias: resolveAliases,
  },
});
