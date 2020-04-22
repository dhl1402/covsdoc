import React from 'react';
import { Typography } from 'antd';

import { Editor, CodeBlock } from 'components';

import examples from 'examples';

const { Title } = Typography;

const BuiltinFunctions = () => {
  return (
    <div>
      <Title level={1}>Global Functions</Title>
      <Title level={2}>echo</Title>
      Print message to STDOUT
      <CodeBlock className="mt-3">echo(exp1 [, exp2, ..., expN])</CodeBlock>
      <Title level={4}>Parameters</Title>
      <div>
        <code>exp1 ... expN</code> A list of expressions. The string representations of each of
        these expressions are appended together and printed to STDOUT
      </div>
      <Title className="mt-3" level={4}>
        Example
      </Title>
      <Editor className="my-3" height={50} defaultScript={examples.echo.trim()} />
      <Title level={2}>len</Title>
      Get length of arrays or strings
      <CodeBlock className="mt-3">len(inp)</CodeBlock>
      <Title level={4}>Parameters</Title>
      <div>
        <code>inp</code> Array or string
      </div>
      <Title className="mt-3" level={4}>
        Return value
      </Title>
      <div>Number of elements in that array or number of characters in string</div>
      <Title className="mt-3" level={4}>
        Example
      </Title>
      <Editor className="my-3" height={85} defaultScript={examples.len.trim()} />
      <Title level={2}>filter</Title>
      Creates a new array/object with all elements/properties that pass the test implemented by the
      provided function.
      <CodeBlock className="mt-3">
        newArr := filter(inp, callback(element, index))
        <br />
        newObj := filter(inp, callback(value, key))
      </CodeBlock>
      <Title level={4}>Parameters</Title>
      <div>
        <code>inp</code> Array or Object
        <br />
        <code>callback</code> Function used to test each element of the array or property of object.
        Return <code>#t</code> to keep the element/property, <code>#f</code> otherwise.
      </div>
      <Title className="mt-3" level={4}>
        Return value
      </Title>
      A new array/object with the elements/properties that pass the test
      <Title className="mt-3" level={4}>
        Example
      </Title>
      <Editor className="my-3" height={240} defaultScript={examples.filter.trim()} />
      <Title level={2}>map</Title>
      Creates a new array/object populated with the results of calling a provided function on every
      element/property in the calling array/object
      <CodeBlock className="mt-3">
        newArr := map(inp, callback(element, index))
        <br />
        newObj := map(inp, callback(value, key))
      </CodeBlock>
      <Title level={4}>Parameters</Title>
      <div>
        <code>inp</code> Array or Object
        <br />
        <code>callback</code> Function that is called for every element/property. Each time callback
        executes, the returned value is added to the return array/object
      </div>
      <Title className="mt-3" level={4}>
        Return value
      </Title>
      A new array/object with the elements/properties that pass the test
      <Title className="mt-3" level={4}>
        Example
      </Title>
      <Editor className="my-3" height={240} defaultScript={examples.map.trim()} />
      <Title level={2}>reduce</Title>
      Executes a function (that you provide) on each element/property of the array/object, resulting
      in a single output value.
      <CodeBlock className="mt-3">
        reduce(inp, callback(accumulator, element, index), initialValue)
        <br />
        reduce(inp, callback(accumulator, value, key), initialValue)
      </CodeBlock>
      <Title level={4}>Parameters</Title>
      <div>
        <code>inp</code> Array or Object
        <br />
        <code>callback</code> Function to execute on each element/property in the array/object
        <br />
        <code>initialValue</code> A value to use as the first argument to the first call of the{' '}
        <code>callback</code>
      </div>
      <Title className="mt-3" level={4}>
        Return value
      </Title>
      The single value that results from the reduction.
      <Title className="mt-3" level={4}>
        Example
      </Title>
      <Editor className="my-3" height={240} defaultScript={examples.reducer.trim()} />
      <Title level={2}>join</Title>
      Creates and returns a new string by concatenating all of the elements in an array, separated
      by commas or a specified separator string
      <CodeBlock className="mt-3">s := join(inp, [separator])</CodeBlock>
      <Title level={4}>Parameters</Title>
      <div>
        <code>inp</code> Array
        <br />
        <code>separator</code> Specifies a string to separate each pair of adjacent elements of the
        array. If omitted, the array elements are separated with a comma.
      </div>
      <Title className="mt-3" level={4}>
        Return value
      </Title>
      A string with all array elements joined
      <Title className="mt-3" level={4}>
        Example
      </Title>
      <Editor className="my-3" height={85} defaultScript={examples.join.trim()} />
      <Title level={2}>indexOf</Title>
      Returns the first index at which a given element can be found in the array, or -1 if it is not
      present
      <CodeBlock className="mt-3">index := indexOf(inp, element)</CodeBlock>
      <Title level={4}>Parameters</Title>
      <div>
        <code>inp</code> Array
        <br />
        <code>element</code> Element to locate in the array.
      </div>
      <Title className="mt-3" level={4}>
        Return value
      </Title>
      The first index of the element in the array; -1 if not found.
      <Title className="mt-3" level={4}>
        Example
      </Title>
      <Editor className="my-3" height={85} defaultScript={examples.indexOf.trim()} />
      <Title level={2}>append</Title>
      Add elements to array
      <CodeBlock className="mt-3">
        newArray := append(inp, element1 [, element2, ..., element1N])
      </CodeBlock>
      <Title level={4}>Parameters</Title>
      <div>
        <code>inp</code> Array
        <br />
        <code>element1...elementN</code> List of elements
      </div>
      <Title className="mt-3" level={4}>
        Return value
      </Title>
      New array
      <Title className="mt-3" level={4}>
        Example
      </Title>
      <Editor className="my-3" height={85} defaultScript={examples.append.trim()} />
      <Title level={2}>sort</Title>
      Sorts the elements of an array and returns the sorted array
      <CodeBlock className="mt-3">newArray := sort(inp, comparator(element1, element2))</CodeBlock>
      <Title level={4}>Parameters</Title>
      <div>
        <code>inp</code> Array
        <br />
        <code>comparator</code> A function that defines the sort order. Return <code>#t</code> if{' '}
        <code>element1</code> and <code>element2</code> are in the right order, <code>#f</code>{' '}
        otherwise
      </div>
      <Title className="mt-3" level={4}>
        Return value
      </Title>
      Sorted array
      <Title className="mt-3" level={4}>
        Example
      </Title>
      <Editor className="my-3" height={125} defaultScript={examples.sort.trim()} />
      <Title level={2}>keys</Title>
      Returns an array of a given object&apos;s property keys
      <CodeBlock className="mt-3">keyArr := keys(inp)</CodeBlock>
      <Title level={4}>Parameters</Title>
      <div>
        <code>inp</code> Object
      </div>
      <Title className="mt-3" level={4}>
        Return value
      </Title>
      Array of keys
      <Title className="mt-3" level={4}>
        Example
      </Title>
      <Editor className="my-3" height={85} defaultScript={examples.keys.trim()} />
      <Title level={2}>values</Title>
      Returns an array of a given object&apos;s property values
      <CodeBlock className="mt-3">valueArr := values(inp)</CodeBlock>
      <Title level={4}>Parameters</Title>
      <div>
        <code>inp</code> Object
      </div>
      <Title className="mt-3" level={4}>
        Return value
      </Title>
      Array of values
      <Title className="mt-3" level={4}>
        Example
      </Title>
      <Editor className="my-3" height={85} defaultScript={examples.values.trim()} />
      <Title level={2}>type</Title>
      Return type of input
      <CodeBlock className="mt-3">someType := type(inp)</CodeBlock>
      <Title level={4}>Parameters</Title>
      <div>
        <code>inp</code> Any data type
      </div>
      <Title className="mt-3" level={4}>
        Return value
      </Title>
      A string representation of input type
      <Title className="mt-3" level={4}>
        Example
      </Title>
      <Editor className="my-3" height={85} defaultScript={examples.type.trim()} />
      <Title level={2}>delete</Title>
      Delete an element of array or a property of object
      <CodeBlock className="mt-3">
        newArr := delete(inp, index)
        <br />
        newObj := map(inp, key)
      </CodeBlock>
      <Title level={4}>Parameters</Title>
      <div>
        <code>inp</code> Array or Object
        <code>index</code> Index of element
        <code>key</code> Property key
      </div>
      <Title className="mt-3" level={4}>
        Return value
      </Title>
      New array/object
      <Title className="mt-3" level={4}>
        Example
      </Title>
      <Editor className="my-3" height={160} defaultScript={examples.delete.trim()} />
      <Title level={2}>neg</Title>
      Return a negative version of input number
      <CodeBlock className="mt-3">negNum := neg(inp)</CodeBlock>
      <Title level={4}>Parameters</Title>
      <div>
        <code>inp</code> Number
      </div>
      <Title className="mt-3" level={4}>
        Return value
      </Title>
      Negative number
      <Title className="mt-3" level={4}>
        Example
      </Title>
      <Editor className="my-3" height={50} defaultScript={examples.neg.trim()} />
    </div>
  );
};

export default BuiltinFunctions;
