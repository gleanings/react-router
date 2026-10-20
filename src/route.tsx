/**
 * @module @vvi/react-router/route
 * @file route.tsx
 * @description _
 * @author Mr.MudBean <Mr.MudBean@outlook.com>
 * @copyright 2026 ©️ Mr.MudBean
 * @since 2026-08-29 15:43
 * @version 1.0.0
 * @lastModified 2026-09-06 08:43
 */

import { useContext } from 'react';
import type { ReactNode } from 'react';
import { defaultNavigate, RouterContext } from './router-context';
import { matchRoute } from './tools/match-route';

export type RouteT = {
  /** 新地址 */
  to: string;
  /** 组件 */
  component?: ReactNode;
  /** 子组件 */
  children?: ReactNode;
};

// export

/**
 * # 单路由出口
 */
export function Route({
  to: tagRoute,
  component: Component,
  children,
}: RouteT): ReactNode {
  const { path: fullPath, navigate } = useContext(RouterContext);

  // 未在正确的位置使用将在控制台报错
  if (navigate === defaultNavigate) {
    console.error('请在 `<Router />` 内部使用 `<Route />` 组件');
  }
  // 1. 如果 Route 没有写 path ，说明是存布局组件，直接渲染子路由器
  if (!tagRoute) return Component || null;

  // 2. 全匹配即位普通路由
  if (fullPath === tagRoute)
    return (
      <>
        {Component}
        {children}
      </>
    );

  // 3. 执行匹配逻辑
  const match = matchRoute(tagRoute, fullPath);

  if (!match) return null;
  // 计算剩余路由
  const restPath =
    fullPath.replace(
      new RegExp(`^${tagRoute.replace(/:[^\s/]+/g, '[^/]+')}`),
      '',
    ) || '/';

  // 将剩余的参数和剩余路径注入到 Context 中， 供子组件使用
  return (
    <RouterContext
      value={{
        path: restPath,
        params: match.params,
        navigate,
      }}
    >
      {/* 渲染嵌套路由的子路由 */}
      {children}
    </RouterContext>
  );
}
