import React from 'react';
import { Layout } from 'antd';
import classNames from 'classnames';

import Header from '../Header/Header';

import styles from './MainLayout.module.scss';

const { Content } = Layout;

const MainLayout = ({ children, className }) => {
  return (
    <Layout className={classNames(styles.MainLayout, className)}>
      <Header />
      <Content>{children}</Content>
    </Layout>
  );
};

export default MainLayout;
