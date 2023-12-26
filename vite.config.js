import { defineConfig } from "vite";
import typeComposePlugin from "typecompose-plugin";
import manifest from "./manifest.json";
// // const logger = createLogger()
// const loggerWarn = logger.warn
// logger.warn = (msg, options) => {
//   if (msg.includes('vite:html') && msg.includes(' is empty')) return
//   loggerWarn(msg, options)
// }
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    typeComposePlugin({
      pwa: {
        manifest,
      },
    }),
  ],
});
//# sourceMappingURL=vite.config.js.map
