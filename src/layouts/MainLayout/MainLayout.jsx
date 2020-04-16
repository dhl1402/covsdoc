import React from 'react';
import { Layout } from 'antd';
import classNames from 'classnames';

import Header from '../Header/Header';

import styles from './MainLayout.module.scss';

const MainLayout = ({ children, className }) => {
  return (
    <Layout className={classNames(styles.MainLayout, className)}>
      <Header />
      {children}
    </Layout>
  );
};

export default MainLayout;
