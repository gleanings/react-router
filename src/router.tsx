/**
 * @module @vvi/react-router/router
 * @file router.tsx
 * @description _
 * @author Mr.MudBean <Mr.MudBean@outlook.com>
 * @copyright 2026 ©️ Mr.MudBean
 * @since 2026-08-29 14:58
 * @version 1.0.0
 * @lastModified 2026-10-15 02:20
 */
import type { ReactNode } from 'react';
import { useState, useEffect, useRef } from 'react';
import { RouterContext } from './router-context';

/**
 * # 路由器
 */
export type RouterProps = {
  /** 路由根出口 */
  children?: ReactNode;
  /** 路由的跟 */
  base?: string;
  /** 类型 */
};

/**
 * # Router 组件
 * 负责监听 URL 变化并维护状态
 */
export function Router({ children, base: _base }: RouterProps) {
  let base = _base ?? '/';

  const [path, _setPath] = useState(window.location.pathname);

  /** 设置期望跳转地址 */
  const setProcessedAddress = (to: string) => {
    // 当前页面的地址
    const currentHref = window.location.href;
    const url1 = new URL(to, currentHref);

    _setPath(to);
  };

  /** 当前的状态（原本打算统计） */
  const currentState = useRef<
    {
      route: string;
    }[]
  >([]);

  useEffect(() => {
    /** 事件名 */
    const eventName = 'popstate';
    // 监听浏览器的前进/后退按钮
    const handlePopState = () => {
      setProcessedAddress(window.location.pathname);
      currentState.current = [];
    };
    // 注册事件
    window.addEventListener(eventName, handlePopState);
    // 第一次进入更正当前路径地址
    if (base) {
      const pathname = window.location.pathname;

      if (pathname == base) navigate('/');
    }
    return () => window.removeEventListener(eventName, handlePopState);
  }, []);

  // 提供 navigate 方法，供 Link 组件使用
  const navigate = (to: string) => {
    // 修正展示路由
    const url = base ? `/${base}/${to}`.replaceAll('//', '/') : to;

    window.history.pushState({}, '', url);
    setProcessedAddress(to); // 手动触发状态更新
  };

  return <RouterContext value={{ path, navigate }}>{children}</RouterContext>;
}
