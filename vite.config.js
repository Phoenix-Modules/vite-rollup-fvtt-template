import copy from "rollup-plugin-copy";
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs';
import { defineConfig } from "vite";

//Other than the commented areas, leave the rest of this alone
export default defineConfig({
    build: {
        sourcemap: true,
        rollupOptions: {
            plugins: [nodeResolve({ exportConditions: ['node'] }), commonjs({ defaultIsModuleExports: true })],
            input: {
                module: "src/module.js",
            },
            output: {
                //I prefer renaming this as foundry and the debugger tends to be weird with multiple module.js files
                entryFileNames: "scripts/module.js", 
                format: "cjs",
                dir: "dist",
            },
        },
    },
    plugins: [        
        copy({
            targets: [
                //If you add folders, such as src/templates, etc, add them here
                { src: "src/module.json", dest: "dist" },
                { src: "src/packs", dest: "dist" },
                { src: "src/styles", dest: "dist" },
                { src: "src/assets", dest: "dist" },
            ],
            hook: "writeBundle",
        })
    ],
});

