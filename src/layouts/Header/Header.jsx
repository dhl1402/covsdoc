import React from 'react';
import { Layout, Menu } from 'antd';
import { GithubFilled } from '@ant-design/icons';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <Layout.Header className={styles.Header}>
      <div>COVIDScript</div>
      <div className="ml-auto">
        <Menu theme="dark" mode="horizontal">
          <Menu.Item>Documents</Menu.Item>
          <Menu.Item>Playground</Menu.Item>
          <Menu.Item>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/dhl1402/covidscript"
            >
              <GithubFilled />
            </a>
          </Menu.Item>
        </Menu>
      </div>
    </Layout.Header>
  );
};

export default Header;
