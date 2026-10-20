/**
 * @module @vvi/react-router/useRoute
 * @file use-router.ts
 * @description _
 * @author Mr.MudBean <Mr.MudBean@outlook.com>
 * @copyright 2026 ©️ Mr.MudBean
 * @since 2026-08-31 23:33
 * @version 1.0.0
 * @lastModified 2026-09-02 03:01
 */

import { useContext } from 'react';
import { defaultNavigate, RouterContext } from './router-context';

/**
 * 使用路由
 */
export function useRouter() {
  const { path, navigate } = useContext(RouterContext);

  if (navigate === defaultNavigate) {
    console.error('请在 `<Router />` 内部使用 `useRouter`');
  }

  return {
    path,
    navigate,
  };
}
