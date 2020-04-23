import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import classNames from 'classnames';

import Header from '../Header/Header';

import styles from './SiderLayout.module.scss';

const { Sider, Content } = Layout;

const SiderLayout = ({ children, className, routes, selected }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [collapsed, setCollapsed] = useState(isSmallScreen);

  const onBreakpoint = broken => {
    setIsSmallScreen(broken);
    setCollapsed(broken);
  };

  return (
    <Layout className={classNames(styles.Sider, className)}>
      <Header />
      <Layout>
        <Sider
          className={classNames({ 'sider-small-screen': isSmallScreen })}
          collapsible
          width={250}
          trigger={null}
          theme="dark"
          breakpoint="sm"
          collapsedWidth={0}
          collapsed={collapsed}
          onBreakpoint={onBreakpoint}
        >
          <Menu mode="inline" theme="dark" selectedKeys={[selected]}>
            {routes.map(r => (
              <Menu.Item key={r.path}>
                <Link to={r.path}>{r.title}</Link>
              </Menu.Item>
            ))}
          </Menu>
          {collapsed && (
            <Button className="sidebar-toggler" type="primary" onClick={() => setCollapsed(false)}>
              <MenuOutlined />
            </Button>
          )}
          {isSmallScreen && !collapsed && (
            <Button className="sidebar-toggler" type="primary" onClick={() => setCollapsed(true)}>
              <CloseOutlined />
            </Button>
          )}
        </Sider>
        <Layout>
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default SiderLayout;
