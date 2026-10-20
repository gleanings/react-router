/**
 * @module @vvi/react-router/router-context
 * @file router-context.ts
 * @description _
 * @author Mr.MudBean <Mr.MudBean@outlook.com>
 * @copyright 2026 ©️ Mr.MudBean
 * @since 2026-08-29 15:14
 * @version 1.0.0
 * @lastModified 2026-09-03 18:24
 */

import { createContext } from 'react';

type Navigate = (to: string) => void;

type RouterContextT = {
  /** 当前的路由地址 */
  path: string;
  /** 跳转方法 */
  navigate: Navigate;
  /** 使用参数 */
  params?: Record<string, string>;
};

const defaultNavigate: Navigate = (to: string): void => console.error(to);

//  1. 创建路由上下文，用于在组件树中共享当前路径
const RouterContext = createContext<RouterContextT>({
  path: '',
  navigate: defaultNavigate,
});

export { defaultNavigate, RouterContext };

export type { Navigate, RouterContextT };
