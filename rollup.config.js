import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

// src/ is fully TypeScript now (migrated off .js/.jsx), so
// @rollup/plugin-typescript alone handles compilation and the JSX
// transform (tsconfig "jsx": "react-jsx") — no babel needed anymore.
export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      exports: "named",
    }
  ],
  // react-jsx automatic runtime (tsconfig "jsx": "react-jsx") imports
  // react/jsx-runtime under the hood — keep it external like react itself.
  external: ["react", "react-dom", "react/jsx-runtime"],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: [".ts", ".tsx"]
    }),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: false,
      outDir: "dist",
      exclude: ["**/*.test.*", "**/*.stories.*"]
    }),
    postcss({
      extract: true,
      modules: false
    })
  ]
};
