import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { resolve } from "path";
import styleImport, { VantResolve } from "vite-plugin-style-import";

export default defineConfig({
  root: "./src/packages/",
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dirs: ["src/components/common"],
      resolvers: [ElementPlusResolver()],
    }),
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
  resolve: {
    alias: {
      "@src": resolve(__dirname, "src"),
      "@editor": resolve(__dirname, "src/packages/editor"),
      "@preview": resolve(__dirname, "src/packages/preview"),
    },
  },
  // 预构建
  optimizeDeps: {
    include: ["element-plus", "vuedraggable"],
  },
  build: {
    sourcemap: false,
    minify: "terser",
    rollupOptions: {
      input: {
        editor: resolve(__dirname, "src/packages/editor/index.html"),
        preview: resolve(__dirname, "src/packages/preview/index.html"),
      },
    },
  },
  server: {
    strictPort: false, // 设为 true 时若端口已被占用则会直接退出，而不是尝试下移一格端口
    host: "0.0.0.0",
    port: 2022, // 设置服务启动端口号
    open: false, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
  },
});
