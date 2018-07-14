import React from 'react';
import {ConnectionStateContainer} from './ConnectionState';
import {Card, Row, Col} from 'react-materialize';

export const Contain = (props) =>{
  const name = 'movie';
  return(
    <div className ="container center-align">
    <Row>
    <Col className="push-m1 push-s1 s10 m10 l12">
      <Card className="grey darken-2">
      <div className="card-title">
          <h4 className="white-text header">Vote for your favourite {name}!</h4>
      </div>
      <div className="card-content">
          <ConnectionStateContainer />
            {props.children}
      </div>
      </Card>
    </Col>
    </Row>
    </div>
  );
}
