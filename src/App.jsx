import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Playground from './pages/Playground/Playground';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/playground" component={Playground} />
      <Route component={Home} />
    </Switch>
  );
}

export default App;
