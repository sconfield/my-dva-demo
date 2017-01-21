import React from 'react';
import styles from './CounterComponent.css';

import { connect } from 'dva';
import { Button, Icon, Card, Badge, Row, Col } from 'antd';

function CounterComponent({ dispatch, count }) {
  return (
    <div className={styles.normal}>
      <Card title="Component: CounterComponent" style={{ width: 300 }}>
        <Row>
          <Col span={4} offset={4}>
            <Badge count={ count } />
          </Col>
          <Col span={12} offset={4}>
            <Button type="primary" shape="circle" icon="plus-circle" size="large" key="add"
              onClick={()=>{ dispatch({ type: 'counter/add' }) }} />
            <Button shape="circle" icon="minus-circle" size="large" key="minus"
              onClick={()=>{ dispatch({ type: 'counter/minus' }) }} />
          </Col>
        </Row>
      </Card>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.counter.count
  };
}

export default connect(mapStateToProps)(CounterComponent);
