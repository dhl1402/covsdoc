import React from 'react';
import classNames from 'classnames';

import styles from './CodeBlock.module.scss';

const CodeBlock = ({ className, children }) => {
  return <pre className={classNames(styles.CodeBlock, className)}>{children}</pre>;
};

export default CodeBlock;
