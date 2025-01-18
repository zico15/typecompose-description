import { defineConfig } from "vite";
import typeComposerPlugin from "typecomposer-plugin";
import path from "path";

export default defineConfig({
  plugins: [typeComposerPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
});
