/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import eslint from "vite-plugin-eslint";
import { pioneer } from "./vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
    root: resolve(__dirname, "src"),

    // Generates relative urls in html etc.
    base: "./",

    build: {
        outDir: resolve(__dirname, "dist"),
        emptyOutDir: true
    },

    plugins: [
        pioneer({
            rootSite: true,
            apps: ["sample", "services-sample"],
            sites: ["example-site"]
        }),
        react(),
        eslint()
    ],

    // https://vitest.dev/config/
    test: {}
});
