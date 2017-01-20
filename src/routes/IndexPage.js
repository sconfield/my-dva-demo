import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

import { Link } from 'dva/router';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li>
          <Link to="/counter-route" activeClassName="active">show counter</Link>
        </li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
