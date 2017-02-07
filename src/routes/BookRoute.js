import React from 'react';
import { connect } from 'dva';
import styles from './BookRoute.css';

import { Link } from 'dva/router';

function BookRoute() {
  return (
    <div className={styles.normal}>
      <h1>Route Component: BookRoute</h1>
      <Link to="/" activeClassName="active">come back</Link>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(BookRoute);
