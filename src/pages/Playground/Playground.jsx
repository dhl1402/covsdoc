import React from 'react';

import { MainLayout } from 'layouts';
import { Editor } from 'components';

import styles from './Playground.module.scss';

const exampleScript = `func saySomething(message) {
  return func(to) {
    echo(message, to)
  }
}
saySomethingTo := saySomething("Hello")
saySomethingTo("World")`;

const Playground = () => {
  return (
    <MainLayout>
      <div className={styles.Playground}>
        <Editor className="p-3" defaultScript={exampleScript} />
      </div>
    </MainLayout>
  );
};

export default Playground;
