/**
 * @module @vvi/react-router/rsbuild.config
 * @file rsbuild.config.ts
 * @description _
 * @author Mr.MudBean <Mr.MudBean@outlook.com>
 * @copyright 2026 ©️ Mr.MudBean
 * @since 2026-08-28 15:41
 * @version 1.0.0
 * @lastModified 2026-08-29 00:48
 */

import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { defineConfig } from '@rsbuild/core';

/**
 * @see https://rsbuild.rs/zh/plugins/list
 */
export default defineConfig({
  source: {
    entry: {
      index: './src/pages/index.tsx',
    },
  },
  html: {
    title: '路由测试',
    favicon: 'https://static.lmssee.com/favicon.ico',
    meta: {
      description: '',
    },
  },
  plugins: [
    pluginSass(),
    pluginReact({
      reactCompiler: true,
    }),
  ],
});
