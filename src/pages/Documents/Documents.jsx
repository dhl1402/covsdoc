import React from 'react';

import { SiderLayout } from 'layouts';
import Installation from './Installation';
import Variables from './Variables';
import DataTypes from './DataTypes';
import FunctionsAndClosure from './FunctionsAndClosure';
import ControlFlow from './ControlFlow';
import BuiltinFunctions from './BuiltinFunctions';
import Examples from './Examples';

import styles from './Documents.module.scss';

const routes = [
  // { title: 'Introduction', path: '/documents/introduction' },
  { title: 'Installation', path: '/documents/installation' },
  { title: 'Variables', path: '/documents/variables' },
  { title: 'Data Types', path: '/documents/data-types' },
  { title: 'Functions and Closures', path: '/documents/functions-and-closures' },
  { title: 'Control Flow', path: '/documents/control-flow' },
  { title: 'Built-in Functions', path: '/documents/builtin-functions' },
  { title: 'Examples', path: '/documents/examples' },
];

const docs = [
  { key: 'installation', render: () => <Installation /> },
  { key: 'variables', render: () => <Variables /> },
  { key: 'data-types', render: () => <DataTypes /> },
  { key: 'functions-and-closures', render: () => <FunctionsAndClosure /> },
  { key: 'control-flow', render: () => <ControlFlow /> },
  { key: 'builtin-functions', render: () => <BuiltinFunctions /> },
  { key: 'examples', render: () => <Examples /> },
];

const Documents = ({ location, match }) => {
  const doc = docs.find(d => d.key === match.params.doc) || docs[0];
  return (
    <SiderLayout routes={routes} selected={location.pathname}>
      <div className={styles.Documents}>{doc.render()}</div>
    </SiderLayout>
  );
};

export default Documents;
