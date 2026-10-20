/**
 * @module @vvi/react-router/app-content-ele
 * @file index.tsx
 * @description _
 * @author Mr.MudBean <Mr.MudBean@outlook.com>
 * @copyright 2026 ©️ Mr.MudBean
 * @since 2026-09-04 17:42
 * @version 1.0.0
 * @lastModified 2026-09-04 17:52
 */
import type { ReactNode } from 'react';
import styles from './index.module.scss';

export const ContentEle = ({ children }: { children?: ReactNode }) => (
  <div className={styles.main}>{children}</div>
);
