import React from 'react';
import styles from './CounterComponent.css';

import { connect } from 'dva';
import { Button, Icon, Card, Badge, Row, Col } from 'antd';

function CounterComponent(props) {
  return (
    <div className={styles.normal}>
      <Card title="Component: CounterComponent" style={{ width: 300 }}>
        <Row>
          <Col span={4} offset={4}>
            <Badge count={ props.count } />
          </Col>
          <Col span={12} offset={4}>
            <Button type="primary" shape="circle" icon="plus-circle" size="large" key="add"
              onClick={()=>{ props.dispatch({ type: 'counter/add' }) }} />
            <Button shape="circle" icon="minus-circle" size="large" key="minus"
              onClick={()=>{ props.dispatch({ type: 'counter/minus' }) }} />
          </Col>
        </Row>
        <Row>
          <Button type="ghost" size="large" onClick={()=>{ props.dispatch({ type: 'counter/whatIsTheGenerator' }) }}>
            What is the generator?
          </Button>
        </Row>
      </Card>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.counter
  };
}

export default connect(mapStateToProps)(CounterComponent);
