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
        {/* <Link href="/index"> */}
        {/* <a> */}
        <HeaderImg src="/static/images/TornadoLogo.png" />
        {/* </a> */}
        {/* </Link> */}
      </Col>
      <Col xs={0} sm={0} md={0} lg={0} xl={0}>
        {/* <Menu
          mode='horizontal'
        >
          <Icon type='home'/>
            INDEX
        </Menu> */}
        {/* <span style={{ fontSize: '3vh' }}>GameBoard for TTTC</span> */}
      </Col>
    </Row>
  );
};
