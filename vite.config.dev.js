import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import copy from "rollup-plugin-copy";
import { defineConfig } from "vite";

//If you make changes to vite.config.js, duplicate those changes, with the exception of src/packs
export default defineConfig({
    build: {
        sourcemap: true,
        emptyOutDir: false,
        rollupOptions: {
            plugins: [nodeResolve({ exportConditions: ['node'] }), commonjs()],
            input: {
                module: "src/module.js",
            },
            output: {
                entryFileNames: "scripts/module.js",
                format: "cjs",
                dir: "dist",
            },
        },
    },
    plugins: [
        copy({
            targets: [
                //Do not add src/packs to this list as this is for live debugging and foundry locks the files in the packs folder
                { src: "src/module.json", dest: "dist" },
                { src: "src/templates", dest: "dist" },
                { src: "src/styles", dest: "dist" },
                { src: "src/assets", dest: "dist" },
            ],
            hook: "writeBundle",
        })
    ],
});

