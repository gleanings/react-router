/**
 * @module @vvi/react-router/normalize-slash
 * @file normalize-slash.ts
 * @description _
 * @author Mr.MudBean <Mr.MudBean@outlook.com>
 * @copyright 2026 ©️ Mr.MudBean
 * @since 2026-10-19 11:30
 * @version 1.0.0
 * @lastModified 2026-10-19 11:32
 */

/**
 * # 规范路径中的斜杠
 * @param path  - 待规范的路径
 * @returns - 规范后的路径
 */
export function normalizeSlash(path: string): string {
  return '/' + path.split('/').filter(Boolean).join('/') || '/';
}
