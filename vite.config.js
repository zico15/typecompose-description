import { defineConfig } from "vite";
import typeComposePlugin from "typecompose-plugin";
// // const logger = createLogger()
// const loggerWarn = logger.warn
// logger.warn = (msg, options) => {
//   if (msg.includes('vite:html') && msg.includes(' is empty')) return
//   loggerWarn(msg, options)
// }
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [typeComposePlugin()],
});
//# sourceMappingURL=vite.config.js.map
