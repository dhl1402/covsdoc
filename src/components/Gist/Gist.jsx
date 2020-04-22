import React, { useEffect } from 'react';
import { stringify } from 'query-string';
import classNames from 'classnames';

import { Loader } from 'components';

import { useTempState } from 'hooks';

import styles from './Gist.module.scss';

let gistCallbackId = 0;
let addedStyle = false;

const Gist = ({ className, id, fileName, onShow }) => {
  const [content, setContent] = useTempState('', [id, fileName]);

  useEffect(() => {
    const callback = `gist_callback_${(gistCallbackId += 1)}`;
    window[callback] = ({ div, stylesheet }) => {
      setContent(div);
      if (!addedStyle) {
        const link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = stylesheet;

        document.head.appendChild(link);
        addedStyle = true;
      }
    };

    const query = stringify({ callback, file: fileName });
    const url = `https://gist.github.com/${id}.json?${query}`;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    document.head.appendChild(script);

    return () => {
      delete window[callback];
    };
  }, [id, fileName]);

  useEffect(() => {
    if (content && typeof onShow === 'function') {
      onShow();
    }
  }, [content]);

  if (!content) {
    return <Loader className={classNames('my-5 mx-auto w-100', className)} size="large" />;
  }

  return (
    <div
      className={classNames(styles.gist, className)}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default Gist;
