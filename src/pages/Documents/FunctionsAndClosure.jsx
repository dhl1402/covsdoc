import React from 'react';
import { Typography } from 'antd';

import { Editor } from 'components';

import examples from 'examples';

const { Title } = Typography;

const FunctionsAndClosures = () => {
  return (
    <div>
      <Title level={1}>Functions and Closures</Title>
      <div>
        As like any other functional programming languages, functions are variables and can be
        assigned to other variables
      </div>
      <Title className="mt-3" level={3}>
        Declaration
      </Title>
      Function can be declared by 2 ways
      <Title className="mt-3" level={4}>
        Function Declaration
      </Title>
      <Editor className="my-3" height={105} defaultScript={examples.function.trim()} />
      <Title className="mt-3" level={4}>
        Function Expression
      </Title>
      <Editor className="my-3" height={105} defaultScript={examples.function2.trim()} />
      <Title className="mt-3" level={3}>
        Return Statement
      </Title>
      <div>
        Function return value back to caller using <code>return</code> keyword
      </div>
      <Editor className="my-3" height={125} defaultScript={examples.function3.trim()} />
      <Title className="mt-3" level={3}>
        Closure
      </Title>
      <div>
        Function has references to all of the variables that were declared at the time the function
        was created even when the function declares those variables is popped out of the callstack
      </div>
      <Editor className="my-3" height={160} defaultScript={examples.closure.trim()} />
    </div>
  );
};

export default FunctionsAndClosures;
