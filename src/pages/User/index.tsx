/**
 * @packageDocumentation
 * @module @vvi/react-router/index
 * @file index.tsx
 * @description _
 * @author Mr.MudBean <Mr.MudBean@outlook.com>
 * @license MIT
 * @copyright 2026 ©️ Mr.MudBean
 * @since 2026-09-05 18:41
 * @version 1.0.0
 * @lastModified 2026-09-05 20:13
 */

import { Link } from '../../link';
import { useParams } from '../../use-params';

/**
 *
 */
export function UserContent() {
  const param = useParams();

  console.log(param);
  return (
    <div>
      <h1>用户页面</h1>
      <p>用户：{param.id}</p>
      <Link to="../tom">查看另一个人信息</Link>
    </div>
  );
}
