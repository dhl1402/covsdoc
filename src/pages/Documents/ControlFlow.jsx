import React from 'react';
import { Typography } from 'antd';

import { Editor } from 'components';

import examples from 'examples';

const { Title } = Typography;

const ControlFlow = () => {
  return (
    <div>
      <Title level={1}>Control Flow</Title>
      <Title level={3}>If Else Elif</Title>
      <div>
        The <code>if</code> statement evaluates a condition and if the result is true, executes its
        code block. The parentheses surrounding condition can be ommited
      </div>
      <Editor className="my-3" height={105} defaultScript={examples.if.trim()} />
      <div>
        The <code>if</code> statement may contain other optional <code>elif</code> and{' '}
        <code>else</code> block. It executes when previous conditions are false.
      </div>
      <Editor className="my-3" height={180} defaultScript={examples.if2.trim()} />
      <div>
        The <code>if</code> and <code>elif</code> statements can start with a short declaration
        statement to declare local variables of for their blocks
      </div>
      <Editor className="my-3" height={200} defaultScript={examples.if3.trim()} />
      <Title level={4}>Boolean Conversion</Title>
      <div>
        The <code>if</code> statement evaluates the expression in its condition and converts the
        result to a boolean.
        <br />
        Any data types can be evaluated to boolean. <code>null</code>, <code>undefined</code>, zero
        number, empty string, empty array, empty object will be evaluated to <code>#f</code>{' '}
        otherwise it will be <code>#t</code>
      </div>
      <Editor className="my-3" height={145} defaultScript={examples.if4.trim()} />
      <Title level={4}>Equality Operators</Title>
      Two primitive variables (string, number, boolean) are equal when their value are equal
      <Editor className="my-3" height={105} defaultScript={examples.if5.trim()} />
      Two reference variables (object, array, function) are equal when their reference are equal
      <Editor className="my-3" height={185} defaultScript={examples.if6.trim()} />
      <Title level={3} className="mt-3">
        For Loop
      </Title>
      <div>
        There is only one looping construct, the <code>for</code> loop
        <br />
        The basic for loop has three components separated by semicolons:
        <ol>
          <li>The init statement: executed before the first iteration</li>
          <li>The condition expression: evaluated before every iteration</li>
          <li>The post statement: executed at the end of every iteration</li>
        </ol>
        The parentheses surrounding these components can be ommited
      </div>
      <Editor className="my-3" height={145} defaultScript={examples.for.trim()} />
      <div>
        All three components of for loop are optional. So we can use <code>for</code> exactly the
        same way as while loop
      </div>
      <Editor className="my-3" height={145} defaultScript={examples.for2.trim()} />
      <div>
        If you omit the loop condition it loops forever, exactly what a <code>while(true)</code>{' '}
        does
      </div>
      <Editor className="my-3" height={200} defaultScript={examples.for3.trim()} />
    </div>
  );
};

export default ControlFlow;
