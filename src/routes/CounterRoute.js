import React from 'react';
import { connect } from 'dva';
import styles from './CounterRoute.css';

import CounterComponent from '../components/CounterComponent.js';
import { Link } from 'dva/router';

function CounterRoute(props) {
  return (
    <div className={styles.normal}>
      <h1>Route Component: CounterRoute</h1>
      <CounterComponent { ...props } />
      <Link to="/" activeClassName="active">come back</Link>
    </div>
  );
}

// this is a container component.

function mapStateToProps(state) {
  return {
    count: state.counter
  };
}

export default connect(mapStateToProps)(CounterRoute);
