// vite.config.js
import { defineConfig } from "file:///C:/DD/DB-DigitalButlers-Tabs/node_modules/.pnpm/vite@3.2.10_sass@1.77.8/node_modules/vite/dist/node/index.js";
import * as sass from "file:///C:/DD/DB-DigitalButlers-Tabs/node_modules/.pnpm/sass@1.77.8/node_modules/sass/sass.node.mjs";
import postcssPresetEnv from "file:///C:/DD/DB-DigitalButlers-Tabs/node_modules/.pnpm/postcss-preset-env@10.0.0_postcss@8.4.41/node_modules/postcss-preset-env/dist/index.mjs";
import fs from "node:fs";
import CleanCSS from "file:///C:/DD/DB-DigitalButlers-Tabs/node_modules/.pnpm/clean-css@5.3.3/node_modules/clean-css/index.js";
import typescript from "file:///C:/DD/DB-DigitalButlers-Tabs/node_modules/.pnpm/@rollup+plugin-typescript@11.1.6_rollup@4.20.0_typescript@4.9.5/node_modules/@rollup/plugin-typescript/dist/es/index.js";
var vite_config_default = defineConfig({
  build: {
    watch: {},
    lib: {
      entry: ["./src/index.ts"],
      name: "DigitaButlers-Tabs",
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      output: {
        exports: "named"
      }
    },
    minify: true,
    sourcemap: true
  },
  plugins: [
    typescript({}),
    {
      name: "generate-css-variants",
      writeBundle() {
        const scssContent = fs.readFileSync("src/styles.scss", "utf8");
        const cssResult = sass.compile("src/styles.scss");
        fs.writeFileSync("dist/styles.scss", scssContent);
        fs.writeFileSync("dist/styles.min.scss", scssContent.replace(/\s+/g, " ").trim());
        fs.writeFileSync("dist/styles.css", cssResult.css);
        const minifier = new CleanCSS();
        const minifiedCss = minifier.minify(cssResult.css).styles;
        fs.writeFileSync("dist/styles.min.css", minifiedCss);
      }
    }
  ],
  css: {
    postcss: {
      plugins: [postcssPresetEnv()]
    }
  },
  server: {
    port: 3e3
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxERFxcXFxEQi1EaWdpdGFsQnV0bGVycy1UYWJzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxERFxcXFxEQi1EaWdpdGFsQnV0bGVycy1UYWJzXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9ERC9EQi1EaWdpdGFsQnV0bGVycy1UYWJzL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCAqIGFzIHNhc3MgZnJvbSAnc2Fzcyc7XHJcbmltcG9ydCBwb3N0Y3NzUHJlc2V0RW52IGZyb20gJ3Bvc3Rjc3MtcHJlc2V0LWVudic7XHJcbmltcG9ydCBmcyBmcm9tICdub2RlOmZzJztcclxuaW1wb3J0IENsZWFuQ1NTIGZyb20gJ2NsZWFuLWNzcyc7XHJcblxyXG5pbXBvcnQgdHlwZXNjcmlwdCBmcm9tICdAcm9sbHVwL3BsdWdpbi10eXBlc2NyaXB0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcblx0YnVpbGQ6IHtcclxuXHRcdHdhdGNoOiB7fSxcclxuXHRcdGxpYjoge1xyXG5cdFx0XHRlbnRyeTogWycuL3NyYy9pbmRleC50cyddLFxyXG5cdFx0XHRuYW1lOiAnRGlnaXRhQnV0bGVycy1UYWJzJyxcclxuXHRcdFx0ZmlsZU5hbWU6ICdpbmRleCcsXHJcblx0XHRcdGZvcm1hdHM6IFsnZXMnXSxcclxuXHRcdH0sXHJcblx0XHRyb2xsdXBPcHRpb25zOiB7XHJcblx0XHRcdG91dHB1dDoge1xyXG5cdFx0XHRcdGV4cG9ydHM6ICduYW1lZCcsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0bWluaWZ5OiB0cnVlLFxyXG5cdFx0c291cmNlbWFwOiB0cnVlLFxyXG5cdH0sXHJcblx0cGx1Z2luczogW1xyXG5cdFx0dHlwZXNjcmlwdCh7fSksXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdnZW5lcmF0ZS1jc3MtdmFyaWFudHMnLFxyXG5cdFx0XHR3cml0ZUJ1bmRsZSgpIHtcclxuXHRcdFx0XHRjb25zdCBzY3NzQ29udGVudCA9IGZzLnJlYWRGaWxlU3luYygnc3JjL3N0eWxlcy5zY3NzJywgJ3V0ZjgnKTtcclxuXHRcdFx0XHRjb25zdCBjc3NSZXN1bHQgPSBzYXNzLmNvbXBpbGUoJ3NyYy9zdHlsZXMuc2NzcycpO1xyXG5cclxuXHRcdFx0XHQvLyBcdTA0MTdcdTA0MzBcdTA0M0ZcdTA0MzhcdTA0NDFcdTA0NEJcdTA0MzJcdTA0MzBcdTA0MzVcdTA0M0MgU0NTUyBcdTA0NDRcdTA0MzBcdTA0MzlcdTA0M0JcdTA0NEJcclxuXHRcdFx0XHRmcy53cml0ZUZpbGVTeW5jKCdkaXN0L3N0eWxlcy5zY3NzJywgc2Nzc0NvbnRlbnQpO1xyXG5cdFx0XHRcdGZzLndyaXRlRmlsZVN5bmMoJ2Rpc3Qvc3R5bGVzLm1pbi5zY3NzJywgc2Nzc0NvbnRlbnQucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKSk7XHJcblxyXG5cdFx0XHRcdC8vIFx1MDQxN1x1MDQzMFx1MDQzRlx1MDQzOFx1MDQ0MVx1MDQ0Qlx1MDQzMlx1MDQzMFx1MDQzNVx1MDQzQyBDU1MgXHUwNDQ0XHUwNDMwXHUwNDM5XHUwNDNCXHUwNDRCXHJcblx0XHRcdFx0ZnMud3JpdGVGaWxlU3luYygnZGlzdC9zdHlsZXMuY3NzJywgY3NzUmVzdWx0LmNzcyk7XHJcblxyXG5cdFx0XHRcdC8vIFx1MDQxQ1x1MDQzOFx1MDQzRFx1MDQzOFx1MDQ0NFx1MDQzOFx1MDQ0Nlx1MDQzOFx1MDQ0MFx1MDQ0M1x1MDQzNVx1MDQzQyBDU1NcclxuXHRcdFx0XHRjb25zdCBtaW5pZmllciA9IG5ldyBDbGVhbkNTUygpO1xyXG5cdFx0XHRcdGNvbnN0IG1pbmlmaWVkQ3NzID0gbWluaWZpZXIubWluaWZ5KGNzc1Jlc3VsdC5jc3MpLnN0eWxlcztcclxuXHRcdFx0XHRmcy53cml0ZUZpbGVTeW5jKCdkaXN0L3N0eWxlcy5taW4uY3NzJywgbWluaWZpZWRDc3MpO1xyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdGNzczoge1xyXG5cdFx0cG9zdGNzczoge1xyXG5cdFx0XHRwbHVnaW5zOiBbcG9zdGNzc1ByZXNldEVudigpXSxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRzZXJ2ZXI6IHtcclxuXHRcdHBvcnQ6IDMwMDAsXHJcblx0fSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFEsU0FBUyxvQkFBb0I7QUFDelMsWUFBWSxVQUFVO0FBQ3RCLE9BQU8sc0JBQXNCO0FBQzdCLE9BQU8sUUFBUTtBQUNmLE9BQU8sY0FBYztBQUVyQixPQUFPLGdCQUFnQjtBQUV2QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixPQUFPO0FBQUEsSUFDTixPQUFPLENBQUM7QUFBQSxJQUNSLEtBQUs7QUFBQSxNQUNKLE9BQU8sQ0FBQyxnQkFBZ0I7QUFBQSxNQUN4QixNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixTQUFTLENBQUMsSUFBSTtBQUFBLElBQ2Y7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNkLFFBQVE7QUFBQSxRQUNQLFNBQVM7QUFBQSxNQUNWO0FBQUEsSUFDRDtBQUFBLElBQ0EsUUFBUTtBQUFBLElBQ1IsV0FBVztBQUFBLEVBQ1o7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNSLFdBQVcsQ0FBQyxDQUFDO0FBQUEsSUFDYjtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUNiLGNBQU0sY0FBYyxHQUFHLGFBQWEsbUJBQW1CLE1BQU07QUFDN0QsY0FBTSxZQUFpQixhQUFRLGlCQUFpQjtBQUdoRCxXQUFHLGNBQWMsb0JBQW9CLFdBQVc7QUFDaEQsV0FBRyxjQUFjLHdCQUF3QixZQUFZLFFBQVEsUUFBUSxHQUFHLEVBQUUsS0FBSyxDQUFDO0FBR2hGLFdBQUcsY0FBYyxtQkFBbUIsVUFBVSxHQUFHO0FBR2pELGNBQU0sV0FBVyxJQUFJLFNBQVM7QUFDOUIsY0FBTSxjQUFjLFNBQVMsT0FBTyxVQUFVLEdBQUcsRUFBRTtBQUNuRCxXQUFHLGNBQWMsdUJBQXVCLFdBQVc7QUFBQSxNQUNwRDtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSixTQUFTO0FBQUEsTUFDUixTQUFTLENBQUMsaUJBQWlCLENBQUM7QUFBQSxJQUM3QjtBQUFBLEVBQ0Q7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNQLE1BQU07QUFBQSxFQUNQO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
