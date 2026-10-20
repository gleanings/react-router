/**
 * @packageDocumentation
 * @module @vvi/react-router/index
 * @file index.tsx
 * @description _
 * @author Mr.MudBean <Mr.MudBean@outlook.com>
 * @license MIT
 * @copyright 2026 ©️ Mr.MudBean
 * @since 2026-08-28 16:08
 * @version 1.0.0
 * @lastModified 2026-09-06 08:44
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from '../router';
import App from './App';

const rootEl = document.getElementById('root');

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <>
      <React.StrictMode>
        <Router base="gleanings">
          <App />
        </Router>
      </React.StrictMode>
    </>,
  );
}
