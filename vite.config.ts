import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { resolve } from "path";
import styleImport, { VantResolve } from "vite-plugin-style-import";

export default defineConfig({
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
    alias: { "@": resolve(__dirname, "src") },
  },
  // 预构建
  optimizeDeps: {
    include: ["element-plus", "vuedraggable"],
  },
  build: {
    rollupOptions: {
      input: {
        // main: resolve(__dirname, "index.html"),
        preview: resolve(__dirname, "preview/index.html"),
      },
    },
  },
  server: {
    // 设为 true 时若端口已被占用则会直接退出，而不是尝试下移一格端口
    strictPort: false,
  },
});
