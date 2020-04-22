import React from 'react';
import { Loading3QuartersOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

/** @param {import('antd/lib/spin').SpinProps} props */
const Loader = props => <Spin indicator={<Loading3QuartersOutlined spin />} {...props} />;

export default Loader;
