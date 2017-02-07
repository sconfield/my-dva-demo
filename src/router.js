import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

import CounterRoute from "./routes/CounterRoute.js";
import BookRoute from "./routes/BookRoute.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/counter-route" component={CounterRoute} />
      <Route path="/book-route" component={BookRoute} />
    </Router>
  );
}

export default RouterConfig;
