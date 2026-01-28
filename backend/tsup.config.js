import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/*.ts"],
  format: ["cjs"],
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
  outDir: "dist",
  target: "es2022",
});
