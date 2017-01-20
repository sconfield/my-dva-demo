import React from 'react';
import styles from './CounterComponent.css';

import { connect } from 'dva';

function CounterComponent({ dispatch, count }) {
  return (
    <div className={styles.normal}>
      <h3>Component: CounterComponent { count } </h3>
      <button key="add" onClick={() => { dispatch({type: 'counter/add'})}}>+</button>
      <button key="minus" onClick={() => { dispatch({type: 'counter/minus'})}}>-</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.counter.count
  };
}

export default connect(mapStateToProps)(CounterComponent);
