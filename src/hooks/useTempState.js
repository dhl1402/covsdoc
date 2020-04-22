import { useState, useEffect } from 'react';

export default (defaultState, deps) => {
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    setState(defaultState);
  }, deps);

  return [state, setState];
};
