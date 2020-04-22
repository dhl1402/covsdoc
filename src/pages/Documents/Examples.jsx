import React from 'react';
import { Typography } from 'antd';

import { Editor } from 'components';

import examples from 'examples';

const { Title } = Typography;

const Examples = () => {
  return (
    <div>
      <Title level={1}>Examples</Title>
      <Title level={3}>Hello World!!!</Title>
      <Editor className="my-3" height={50} defaultScript={examples.helloworld.trim()} />
      <Title level={3}>Currying Functoin</Title>
      <Editor className="my-3" height={165} defaultScript={examples.closure.trim()} />
      <Title level={3}>Binary Search</Title>
      <Editor className="my-3" height={390} defaultScript={examples.binarySearch.trim()} />
    </div>
  );
};

export default Examples;
