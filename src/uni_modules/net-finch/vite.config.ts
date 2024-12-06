import {defineConfig} from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [dts({ entryRoot: "./js_sdk" })],

    build: {
        lib: {
            entry: "./js_sdk/index.ts",
            name: "net-finch",
            formats: ["es"],
            fileName: "net-finch"
        }
    }
});
