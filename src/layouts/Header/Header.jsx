import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { GithubFilled } from '@ant-design/icons';

import logo from 'assets/logo.png';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <Layout.Header className={styles.Header}>
      <div className="float-left">
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
      </div>
      <div className="menu">
        <Menu theme="dark" mode="horizontal">
          <Menu.Item>
            <Link to="/documents">Documents</Link>
          </Menu.Item>
          <Menu.Item>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/dhl1402/covidscript/releases"
            >
              Download
            </a>
          </Menu.Item>
          <Menu.Item>
            <Link to="/playground">Playground</Link>
          </Menu.Item>
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
