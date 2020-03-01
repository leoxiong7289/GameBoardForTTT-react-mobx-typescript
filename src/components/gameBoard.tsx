import * as React from 'react';
import { Row, Col, Button } from 'antd';
import ImageAvatar from './avatar';

interface game {
  gameID: number;
  p1: string;
  s1: number;
  p2: string;
  s2: number;
}

export default (props: any) => {

  const [submitState, setSubmitState] = React.useState(false)
  

  const changeState=()=> {
    setSubmitState(!submitState)
  }
  
  return (
    <div className="board-card">
      
            <Row>
              <Col lg={4}>
                <ImageAvatar name={props.game.p1} hasButton={false} buttonName='' buttonFunction='' />
              </Col>
              <Col lg={4}>
                <input type="number" />
              </Col>
              <Col lg={4}>{`第 ${props.game.gameID} 场`}</Col>
              <Col lg={4}>
                <input type="number" />
              </Col>
              <Col lg={4}>
                <ImageAvatar name={props.game.p2} hasButton={false} buttonName='' buttonFunction='' />
              </Col>
            </Row>
            <Row>
              <Col lg={4}>
                <Button
                  id={`submit-${props.game.gameID}`}
                  type="primary"
                  onClick={()=>setSubmitState(!submitState)}
                  disabled={submitState}
                >
                  SUBMIT
                </Button>
              </Col>
              <Col lg={4}>
                <Button
                  type="danger"
                  onClick={()=>setSubmitState(!submitState)}
                  disabled={!submitState}
                >
                  RESET
                </Button>
              </Col>
            </Row>
    </div>
  );
};
