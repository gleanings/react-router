/**
 * @module @vvi/react-router/match-route
 * @file match-route.ts
 * @description 匹配路由
 * @author Mr.MudBean <Mr.MudBean@outlook.com>
 * @copyright 2026 ©️ Mr.MudBean
 * @since 2026-08-31 09:24
 * @version 1.0.0
 * @lastModified 2026-09-06 08:40
 */

/**
 * # 将 /user/:id 转化为正则，并提取参数
 * @param tagRoute  匹配
 * @param path  将要匹配的路径
 */
export function matchRoute(
  tagRoute: string,
  path: string,
): {
  params: Record<string, string>;
} | null {
  // 将 :param 替换为正则捕获组
  const patternRegex = new RegExp(
    `^${tagRoute.replace(/:[^\s/]+/g, '([^/]+)')}$`,
  );
  const match = path.match(patternRegex);
  if (!match) return null;

  // 提取参数名字和参数值，组装成对像
  const paramNames = (tagRoute.match(/:[^\s/]+/g) || []).map(p => p.slice(1));
  const params: Record<string, string> = {};
  for (let i = 0; i < paramNames.length;) params[paramNames[i]] = match[++i];
  return { params };
}
