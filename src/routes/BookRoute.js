import React from 'react';
import { connect } from 'dva';
import styles from './BookRoute.css';

import { Link } from 'dva/router';

function BookRoute(props) {
  console.log(props.loading);
  if(props.loading) {
    return (
      <div>
        <h1>loading~</h1>
        <h1>loading~</h1>
        <h1>loading~</h1>
      </div>
    );
  }

  const createLi = (item, idx)=>(
    <li key={idx}>{item.name}</li>
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
    book: state.book,
    loading: state.loading.models.book
  };
}

export default connect(mapStateToProps)(BookRoute);
