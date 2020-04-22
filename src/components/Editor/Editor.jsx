import React, { useState, useEffect } from 'react';
import AceEditor from 'react-ace';
import { Button } from 'antd';
import { CaretRightFilled, ClearOutlined, ReloadOutlined } from '@ant-design/icons';
import { js } from 'js-beautify';
import classNames from 'classnames';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-nord_dark';

import styles from './Editor.module.scss';

const Editor = ({ className, animate, defaultScript, readOnly, height }) => {
  const [script, setScript] = useState(animate ? '' : defaultScript);
  const [response, setResponse] = useState({ error: '', message: '' });
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (animate && readOnly && script !== defaultScript) {
      const handle = setTimeout(() => {
        requestAnimationFrame(() => {
          setScript(defaultScript.substring(0, script.length + 1));
        });
      }, 20);
      return () => clearTimeout(handle);
    }
  }, [defaultScript, script, animate, readOnly]);

  const run = async () => {
    try {
      setRunning(true);
      setResponse({ error: '', message: '' });
      const res = await fetch('https://covidscript.herokuapp.com/api/v1/interpret', {
        method: 'POST',
        body: JSON.stringify({ script }),
      });
      const resJSON = await res.json();
      setResponse({ error: resJSON.Error, message: resJSON.Response });
    } catch (e) {
      setResponse({ error: e.message });
    } finally {
      setRunning(false);
    }
  };

  const format = () => {
    const beautifiedScript = js(script, { indent_size: 2, space_in_empty_paren: true });
    setScript(beautifiedScript.replace(/: =/g, ' :=').replace(/}\nelif/, '} elif'));
  };

  const reset = () => {
    setScript(defaultScript);
    setResponse({ error: '', message: '' });
  };

  return (
    <div className={classNames(styles.Editor, className)}>
      <div className="editor">
        <AceEditor
          mode="javascript"
          theme="nord_dark"
          width="100%"
          height={height}
          tabSize={2}
          fontSize={14}
          showPrintMargin={false}
          readOnly={readOnly}
          highlightActiveLine={!readOnly}
          scrollMargin={[14]}
          value={script}
          onChange={setScript}
        />
        {!readOnly && (
          <>
            <div className="output">
              {running && <div>Waiting for remote server...</div>}
              {response.error && <div className="error">{response.error}</div>}
              {response.message && (
                <div>
                  <div>{response.message}</div>
                  <div className="note">Program exited.</div>
                </div>
              )}
            </div>
            <div className="action">
              <Button
                type="primary"
                shape="round"
                onClick={run}
                loading={running}
                icon={<CaretRightFilled />}
              >
                Run
              </Button>
              <Button
                className="ml-2"
                shape="round"
                onClick={format}
                type="primary"
                icon={<ClearOutlined />}
              >
                Format
              </Button>
              <Button
                className="ml-2"
                shape="round"
                onClick={reset}
                type="primary"
                icon={<ReloadOutlined />}
              >
                Reset
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Editor;
