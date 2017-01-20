import React from 'react';
import { connect } from 'dva';
import styles from './CounterRoute.css';

import CounterComponent from '../components/CounterComponent.js';
import { Link } from 'dva/router';

function CounterRoute() {
  return (
    <div className={styles.normal}>
      <h1>Route Component: CounterRoute</h1>
      <CounterComponent />
      <Link to="/" activeClassName="active">come back</Link>
    </div>
  );
}

export default CounterRoute;
