import { defineConfig } from "vite";
import typeComposerPlugin from "typecomposer-plugin";
import path from "path";

export default defineConfig({
  plugins: [
    typeComposerPlugin({
      debuger: false,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ["@codesandbox/sandpack-client"],
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
});
