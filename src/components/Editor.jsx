import React, { useState } from 'react';
import AceEditor from 'react-ace';

const Editor = () => {
  const [script, setScript] = useState('');
  const [response, setResponse] = useState({ error: '', msg: '' });

  const run = async () => {
    try {
      const res = await fetch('https://covsplayground.herokuapp.com/api/v1/interpret', {
        method: 'POST',
        body: JSON.stringify({ script }),
      });
      const resJSON = await res.json();
      setResponse({ error: resJSON.Error, msg: resJSON.Response });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <AceEditor
        mode="yaml"
        theme="xcode"
        width="100%"
        fontSize={13}
        tabSize={2}
        showPrintMargin={false}
        value={script}
        onChange={setScript}
      />
      <button onClick={run} type="button">Run</button>
      <div>
        {response.error && <div>{response.error}</div>}
        {response.msg && <div>{response.msg}</div>}
      </div>
    </div>
  );
};

export default Editor;
