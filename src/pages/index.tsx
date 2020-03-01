import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

const ContentDiv = styled.div`
  margin: 0 auto;
`;

interface RootProps {
  competitionStore?: any
}

@inject('competitionStore')
@observer
class Index extends React.Component<RootProps> {
  constructor(props: any) {
    super(props);
    // console.log(this.props);
  }

  render() {
    const { competition } = this.props.competitionStore;
    return (
      <div>
        <Header />
        <ContentDiv className="content-div">
          {/* {console.log(this.props.competitionStore.changeName('123'))} */}
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div style={{ backgroundColor: '#ccc', width: '100vh', height: '10vh', margin: '0 auto' }}>
                {/* TODO: with Formik to replace */}
                {/* TODO: separate UI from Logic */}
                <label htmlFor="game-name">GAME NAME</label>
                <input type="text" name="game-name"></input>
                <label htmlFor="game-mode">GAME MODE</label>
                <select value="3" name="game-mode">
                  <option value="3">2 out of 3</option>
                  <option value="5">3 out of 5</option>
                  <option value="7">4 out of 7</option>
                </select>
                <label htmlFor="game-style">GAME STYLE</label>
                <select value="single" name="game-style">
                  <option value="single">Single Circle</option>
                  <option value="double">Double Circle</option>
                </select>
                <Link to="/players/">
                  <a>
                    <Button type="primary">Confirm and Go</Button>
                  </a>
                </Link>
              </div>
            </Col>
          </Row>
        </ContentDiv>
        <Footer />
      </div>
    );
  }
}

export default Index;
