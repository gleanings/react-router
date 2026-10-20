/**
 * @module @vvi/react-router/parse-query
 * @file parse-query.ts
 * @description _
 * @author Mr.MudBean <Mr.MudBean@outlook.com>
 * @copyright 2026 ©️ Mr.MudBean
 * @since 2026-10-19 13:19
 * @version 1.0.0
 * @lastModified 2026-10-19 13:22
 */

/**
 * # 解析查询字符串
 * @param search - 待解析的字符串
 * @returns - 返回解析后的查询组
 */
export function parseQuery(search: string): Record<string, string> {
  const params: Record<string, string> = {};
  if (!search) return params;
  new URLSearchParams(search).forEach(
    (val: string, key: string) => (params[key] = val),
  );
  return params;
}
