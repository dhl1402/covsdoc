import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';

import { Editor, CodeBlock } from 'components';

import examples from 'examples';

const { Title } = Typography;

const DataTypes = () => {
  return (
    <div>
      <Title level={1}>Data Types</Title>
      <div>
        CovidScript is a dynamically typed language. A variable can contain any data. It can at one
        moment be a string and at another be a number:
      </div>
      <CodeBlock className="mt-3">{'message := "Hello"\nmessage = 123456'}</CodeBlock>
      <Title level={3}>Numbers</Title>
      <div>
        The number type represents both integer and floating point numbers.
        <br />
        There are many operations for numbers, e.g. multiplication <code>*</code>, division{' '}
        <code>/</code>, addition <code>+</code>, subtraction <code>-</code>, and so on.
        <Editor className="my-3" height={180} defaultScript={examples.number.trim()} />
      </div>
      <Title level={3}>Booleans</Title>
      <div>
        The boolean type has only two values: <code>#t</code> and <code>#f</code>
        <br />
        This type is commonly used to store yes/no values: <code>#t</code> means “yes”, and{' '}
        <code>#f</code> means “no”.
        <br />
        For instance:
      </div>
      <CodeBlock className="mt-3">
        {'thisLanguageIsUseless := #t\niShouldSpendMoreTimeForIt := #f'}
      </CodeBlock>
      Any types and expressions can be evaluate to booleans. More on this in{' '}
      <Link to="/documents/control-flow">Control Flow</Link> section
      <Title level={3} className="mt-3">
        Strings
      </Title>
      <div>
        A string must be surrounded by quotes.
        <br />
        There are 3 types of quotes.
        <br />
        <ol>
          <li>Double quotes: &quot;Hello&quot;.</li>
          <li>Double quotes: &apos;Hello&apos;.</li>
          <li>Double quotes: `Hello`.</li>
        </ol>
      </div>
      <Editor className="my-3" height={180} defaultScript={examples.string.trim()} />
      <Title level={3} className="mt-3">
        null
      </Title>
      <div>
        The special <code>null</code> value does not belong to any of the types described above.
        <br />
        It forms a separate type of its own which contains only the null value:
      </div>
      <Editor className="my-3" height={85} defaultScript={examples.null.trim()} />
      <div>t’s just a special value which represents “nothing”, “empty” or “value unknown”.</div>
      <Title level={3} className="mt-3">
        undefined
      </Title>
      <div>
        The special value <code>undefined</code> also stands apart. It makes a type of its own, just
        like <code>null</code>.
        <br />
        The meaning of <code>undefined</code> is “value is not assigned”.
        <br />
        If a variable is declared, but not assigned, then its value is <code>undefined</code>:
      </div>
      <Editor className="my-3" height={85} defaultScript={examples.undefined.trim()} />
      <Title level={3} className="mt-3">
        Objects
      </Title>
      <div>
        {
          'An object can be created with figure brackets {...} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.'
        }
      </div>
      <Editor className="my-3" height={275} defaultScript={examples.object.trim()} />
      <Title level={3} className="mt-3">
        Arrays
      </Title>
      <div>
        An array can be created with square brackets [...] with an optional list of elements.
        Elements can be anything.
      </div>
      <Editor className="my-3" height={105} defaultScript={examples.array.trim()} />
      <Title level={3} className="mt-3">
        Functions
      </Title>
      <div>
        Functions are declared with <code>func</code> keyword. Learn more about functions at <Link to="/documents/functions-and-closures">Functions and Closures</Link> section
      </div>
      <Editor className="my-3" height={105} defaultScript={examples.function.trim()} />
    </div>
  );
};

export default DataTypes;
