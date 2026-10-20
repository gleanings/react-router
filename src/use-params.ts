/**
 * @module @vvi/react-router/use-params
 * @file use-params.ts
 * @description _
 * @author Mr.MudBean <Mr.MudBean@outlook.com>
 * @copyright 2026 ©️ Mr.MudBean
 * @since 2026-09-04 03:16
 * @version 1.0.0
 * @lastModified 2026-09-04 03:21
 */

import { useContext } from 'react';
import { defaultNavigate, RouterContext } from './router-context';

/**
 * # 获取参数的 Hook
 */
export function useParams() {
  const context = useContext(RouterContext);

  if (context.navigate === defaultNavigate) {
    console.log('请在 `<Router />`  内使用 `useParams()` ');
  }

  return context.params ?? {};
}
