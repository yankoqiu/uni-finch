import {defineConfig} from "vite";
import uni from "@dcloudio/vite-plugin-uni";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [uni()],

    build: {
        lib: {
            entry: "./src/uni_modules/net-finch/js_sdk/index.ts",
            name: "net-finch",
            fileName: "net-finch"
        },
        rollupOptions: {
            external: ["vue"],
            output: {

            }
        }
    }
});
