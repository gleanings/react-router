/**
 * @module @vvi/react-router/link
 * @file link.tsx
 * @description _
 * @author Mr.MudBean <Mr.MudBean@outlook.com>
 * @copyright 2026 ©️ Mr.MudBean
 * @since 2026-08-29 15:13
 * @version 1.0.0
 * @lastModified 2026-09-01 08:12
 */

import type { PropsWithTagName } from '@vvi/type-react';
import { useContext } from 'react';
import type React from 'react';
import { defaultNavigate, RouterContext } from './router-context';

/**
 * # Link 组件
 *
 * 拦截默认的跳转并手动跳转路由
 */
export function Link({
  to,
  children,
  ...props
}: PropsWithTagName<{ to: string }, 'a'>): React.JSX.Element {
  const { navigate } = useContext(RouterContext);

  if (navigate === defaultNavigate) {
    console.error('请在 `<Router />` 内部使用 `<Link />` 组件');
  }

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault(); // 阻止浏览器默认跳转
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
