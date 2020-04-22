import React from 'react';

import { Gist } from 'components';

import configs from 'configs';

const Installation = () => {
  return <Gist id={configs.gistId} fileName="installation.md" />;
};

export default Installation;
