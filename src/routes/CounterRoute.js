import React from 'react';
import { connect } from 'dva';
import styles from './CounterRoute.css';

function CounterRoute() {
  return (
    <div className={styles.normal}>
      Route Component: CounterRoute
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(CounterRoute);
