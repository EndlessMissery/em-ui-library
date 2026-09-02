import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

// Entry is .tsx while migration is in progress, mixed with legacy .jsx files.
// @rollup/plugin-typescript only picks up .ts/.tsx; babel keeps handling
// the remaining .js/.jsx files, so both coexist without double-processing.
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
      extensions: [".js", ".jsx", ".ts", ".tsx"]
    }),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: false,
      outDir: "dist",
      exclude: ["**/*.test.*", "**/*.stories.*"]
    }),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
      extensions: [".js", ".jsx"],
    }),
    postcss({
      extract: true,
      modules: false
    })
  ]
};
