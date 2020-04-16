import React from 'react';

import { MainLayout } from 'layouts';
import { Editor } from 'components';

import styles from './Playground.module.scss';

const Playground = () => {
  return (
    <MainLayout>
      <div className={styles.Playground}>
        <Editor className="p-3" />
      </div>
    </MainLayout>
  );
};

export default Playground;
