import { defineConfig, type AliasOptions } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

const root = path.resolve(__dirname, "src");
const app = path.resolve(__dirname, "src/app");
const assets = path.resolve(__dirname, "src/app/assets");
const style = path.resolve(__dirname, "src/app/styles");
const widgets = path.resolve(__dirname, "src/widgets");
const entities = path.resolve(__dirname, "src/entities");
const shared = path.resolve(__dirname, "src/shared");

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": root,
      "@app": app,
      "@assets": assets,
      "@style": style,
      "@widgets": widgets,
      "@entities": entities,
      "@shared": shared
    } as AliasOptions
  },
})
