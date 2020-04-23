import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col, Divider } from 'antd';

import { MainLayout } from 'layouts';
import { Editor } from 'components';

import examples from 'examples';

import logo from 'assets/logo.png';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <MainLayout>
      <div className={styles.Home}>
        <img src={logo} alt="logo" className="logo" />
        <h2 className="intro">A dynamically typed, interpreted and useless language</h2>
        <Row gutter={32}>
          <Col flex={1} className="mb-3">
            <Editor
              className="demo"
              animate
              readOnly
              height={160}
              defaultScript={examples.closure.trim()}
            />
          </Col>
          <Col flex={1}>
            <div className="entries">
              <Button type="primary" size="large" className="entryButton">
                <Link to="/documents">Learn more</Link>
              </Button>
              <Divider className="divider">Or</Divider>
              <Button type="primary" size="large" className="entryButton">
                <Link to="/playground">Try it online</Link>
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </MainLayout>
  );
};

export default Home;
