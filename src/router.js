import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

import CounterRoute from "./routes/CounterRoute.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/counter-route" component={CounterRoute} />
    </Router>
  );
}

export default RouterConfig;
