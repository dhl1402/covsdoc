import React from 'react';
import { Typography } from 'antd';

import { Editor, CodeBlock } from 'components';

import examples from 'examples';

const { Title } = Typography;

const Variables = () => {
  return (
    <div>
      <Title level={1}>Variables</Title>
      <Title level={3}>Variable declarations</Title>
      <div>
        To declare a variable, use <code>var</code> keyword
      </div>
      <CodeBlock className="mt-3">
        {'var message = "Hello"\n\n// Initialization is optional\nvar message\n\n// We can also declare multiple variables in one line\nvar message1, message2 = "Hello", "World"'}
      </CodeBlock>
      <Title level={3}>Short variable declarations</Title>
      <div>
        <code>:=</code> short assignment statement can be used in place of a <code>var</code>{' '}
        declaration
      </div>
      <CodeBlock className="mt-3">message := &quot;Hello&quot;</CodeBlock>
      <div>Example</div>
      <Editor className="mt-3" height={100} defaultScript={examples.var.trim()} />
    </div>
  );
};

export default Variables;
