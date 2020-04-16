import React, { useState } from 'react';
import AceEditor from 'react-ace';
import { Button } from 'antd';
import { CaretRightFilled, ClearOutlined, ReloadOutlined } from '@ant-design/icons';
import { js } from 'js-beautify';
import classNames from 'classnames';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-nord_dark';

import styles from './Editor.module.scss';

const example = `func sayHello(name) {
    echo("Hello world, my name is", name, "!!!")
}

sayHello("nCovi")`;

const Editor = ({ className }) => {
  const [script, setScript] = useState(example);
  const [response, setResponse] = useState({ error: '', msg: '' });
  const [running, setRunning] = useState(false);

  const run = async () => {
    try {
      setRunning(true);
      setResponse({ error: '', msg: '' });
      const res = await fetch('https://covsplayground.herokuapp.com/api/v1/interpret', {
        method: 'POST',
        body: JSON.stringify({ script }),
      });
      const resJSON = await res.json();
      setResponse({ error: resJSON.Error, msg: resJSON.Response });
    } catch (e) {
      setResponse({ error: e.message });
    } finally {
      setRunning(false);
    }
  };

  const format = () => {
    setScript(js(script), { indent_size: 2, space_in_empty_paren: true });
  };

  const reset = () => {
    setScript(example);
  };

  return (
    <div className={classNames(styles.Editor, className)}>
      <div className="editor">
        <AceEditor
          mode="javascript"
          theme="nord_dark"
          width="100%"
          tabSize={2}
          fontSize={14}
          showPrintMargin={false}
          value={script}
          onChange={setScript}
        />
        <div className="output">
          {running && <div>Waiting for remote server...</div>}
          {response.error && <div className="error">{response.error}</div>}
          {response.msg && (
            <div>
              <div>{response.msg}</div>
              <div className="note">Program exited.</div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-3">
        <Button type="primary" onClick={run} loading={running} icon={<CaretRightFilled />}>
          Run
        </Button>
        <Button className="ml-2" onClick={format} type="primary" icon={<ClearOutlined />}>
          Format
        </Button>
        <Button className="ml-2" onClick={reset} type="primary" icon={<ReloadOutlined />}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Editor;
