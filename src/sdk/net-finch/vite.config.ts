import {defineConfig} from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [dts({ entryRoot: "./js_sdk" })],

    build: {
        lib: {
            entry: {
                "net-finch": "./js_sdk/index.ts",
                "net-cache": "./js_sdk/plugins/cache/index.ts",
            },
            name: "net-finch",
            formats: ["es"],
            fileName: "index"
        },
        rollupOptions: {}
    }
});
