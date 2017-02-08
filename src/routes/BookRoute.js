import React from 'react';
import { connect } from 'dva';
import styles from './BookRoute.css';

import { Link } from 'dva/router';

function BookRoute(props) {
  const createLi = (name, idx)=>(
    <li key={idx}>{name}</li>
  );
  return (
    <div className={styles.normal}>
      <h1>Route Component: BookRoute</h1>
      <ul>{props.book.list.map(createLi)}</ul>
      <Link to="/" activeClassName="active">come back</Link>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    book: state.book
  };
}

export default connect(mapStateToProps)(BookRoute);
