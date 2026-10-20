/**
 * @module @vvi/react-router/app
 * @file App.tsx
 * @description _
 * @author Mr.MudBean <Mr.MudBean@outlook.com>
 * @copyright 2026 ©️ Mr.MudBean
 * @since 2026-08-28 16:13
 * @version 1.0.0
 * @lastModified 2026-09-05 18:43
 */

import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import { Link } from '../link';
import { Route } from '../route';
import styles from './App.module.scss';
import { ContentEle } from './component/app-content-ele/index';
import { UserContent } from './User/index';

const { Header, Content, Footer } = Layout;

const items = [
  { href: '/', label: '首页' },
  { href: '/user/tom', label: 'tom 个人中心' },
  { href: '/user/jerry', label: '个人中心' },
  { href: '/about', label: '关于' },
].map(item => ({
  key: item.href,
  label: <Link to={item.href}>{item.label}</Link>,
  href: item.href,
}));

const App: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Layout>
      <Header className={styles.header}>
        <div className="demo-logo"></div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          className={styles['header-menu']}
        ></Menu>
      </Header>

      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb
          style={{ margin: '16px 0' }}
          items={[{ title: 'home' }, { title: 'list' }, { title: 'App' }]}
        />
        <Route to="/">
          <ContentEle>首页内容区</ContentEle>
        </Route>
        <Route to="/user/tom">
          <ContentEle>用户 tom</ContentEle>
        </Route>
        <Route to="/user/:id">
          <UserContent />
        </Route>
        <Route to="/about"></Route>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        MudBean @{currentYear} Create to React-Router
      </Footer>
    </Layout>
  );
};

export default App;
