import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import classNames from 'classnames';

import Header from '../Header/Header';

import styles from './SiderLayout.module.scss';

const { Sider, Content } = Layout;

const SiderLayout = ({ children, className, routes, selected }) => {
  const [collapsed, setCollapsed] = useState(window.innerWidth < 768);

  return (
    <Layout className={classNames(styles.Sider, className)}>
      <Header />
      <Layout>
        {collapsed && (
          <Button className="sidebar-toggler" type="primary" onClick={() => setCollapsed(false)}>
            <MenuOutlined />
          </Button>
        )}
        <Sider
          collapsible
          width={250}
          trigger={null}
          theme="dark"
          breakpoint="sm"
          collapsedWidth={0}
          collapsed={collapsed}
          onBreakpoint={setCollapsed}
        >
          <Menu mode="inline" theme="dark" selectedKeys={[selected]}>
            {routes.map(r => (
              <Menu.Item key={r.path}>
                <Link to={r.path}>{r.title}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default SiderLayout;
