import { useState, useEffect } from 'react';

export default (defaultState, deps) => {
  const [state, setState] = useState(defaultState);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    setState(defaultState);
  }, deps);

  return [state, setState];
};
