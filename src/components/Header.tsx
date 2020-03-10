import * as React from 'react';
import {Link} from 'react-router-dom';
import { Row, Col, Menu } from 'antd';
import styled from 'styled-components';

const HeaderImg = styled.img`
  width: '30vh';
`;

export default () => {
  return (
    <Row style={{ backgroundColor: '#aaa' }}>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <HeaderImg src="/static/images/TornadoLogo.png" />
      </Col>
    </Row>
  );
};
