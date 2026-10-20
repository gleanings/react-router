/**
 * @module @vvi/react-router/show-url
 * @file show-url.ts
 * @description 展示的 url ，用于设定 location 展示值
 * @author Mr.MudBean <Mr.MudBean@outlook.com>
 * @copyright 2026 ©️ Mr.MudBean
 * @since 2026-09-06 08:58
 * @version 1.0.0
 * @lastModified 2026-10-20 00:23
 */

import { isString } from '@vvi/is';
import { normalizeSlash } from './normalize-slash';
import { parseQuery } from './parse-query';

/** 伪域名 */
const FAKE_ORIGIN = 'https://_';

export type CurrentUrl = {
  /** 虚拟路由 */
  rawHref: string;
  /** 全路径路由 */
  fullPath: string;
  /** 内部使用路径 */
  innerPath: string;
  /** 查询组 */
  query: Record<string, string>;
  /** 哈西 */
  hash: string;
};

/**
 * # 用于展示的 url
 */
export class BrowserURLShow {
  /**
   * # 地址基
   * 标准的地址
   */
  private base: string;

  /**
   * # 当前的路由
   *
   */
  current?: {
    /** 路径（不包含根） */
    pathWithoutBase: string;
    /** 全路由路径 */
    fullPath: string;
  };

  /**
   * # 构建展示的 url
   */
  constructor(base: string) {
    // 基本路由
    this.base = new URL(
      (base && isString(base) && String(base)) || '/',
      location.origin,
    ).pathname.replace(/\/$/, '');

    const pathWithoutBase: string = this.base || '/';
    this.current = {
      pathWithoutBase,
      fullPath: new URL(this.base, location.origin).pathname,
    };
  }

  /**
   * # 拼接全路径
   * @param innerPath - 内部（绝对）路径
   * @returns - 拼接后的地址（带伪域名）
   */
  buildAbsoluteUrl(innerPath: string) {
    return new URL(innerPath, new URL(this.base, FAKE_ORIGIN)).href;
  }

  /**
   * # 解析路由
   * @param to - 未来路径
   * @param currentInnerPath  - 当前路径
   * @returns - 解析后的绝对路径（不含 base）
   */
  resolve(to: string, currentInnerPath: string): CurrentUrl {
    const currentUrl: URL = new URL(
        currentInnerPath,
        this.buildAbsoluteUrl('/'),
      ), // 当前路径
      resolved: URL = new URL(to, currentUrl), // 解析后的路径
      pathname: string = resolved.pathname,
      fullPath =
        normalizeSlash(pathname) +
        (resolved.search || '') +
        (resolved.hash || ''), // 完整路径（包含 base ）
      innerPath =
        this.base && pathname.startsWith(this.base)
          ? pathname.slice(this.base.length) || '/'
          : pathname,
      result = {
        rawHref: resolved.href,
        fullPath,
        innerPath: normalizeSlash(innerPath),
        query: parseQuery(resolved.search),
        hash: resolved.hash,
      };
    return result;
  }
}
