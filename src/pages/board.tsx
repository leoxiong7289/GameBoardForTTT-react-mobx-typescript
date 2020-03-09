import * as React from 'react';
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';

import GameBoard from '../components/gameBoard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GenarateGameBoards from '../components/genarateGameBoards';

const ContainerDiv = styled.div`
  margin: 0 auto;
  background-color: #ccc;
  width: 80%;
`

interface RootProps {
  gamesStore?: any;
  playersStore?: any;
  competitionStore?: any;
}

@inject('playersStore', 'gamesStore', 'competitionStore')
@observer
export default class CompetitionBoard extends React.Component<RootProps> {
  // constructor(props: any) {
  //   super(props);
  // }

  // componentWillMount() {
  //   document.title = this.props.competitionStore.competition.name
  // }

  componentDidMount() {
    const { players } = this.props.playersStore;
    const { competition } = this.props.competitionStore;
    const { gameBoards } = this.props.gamesStore;
    const { storeGameBoardsInStore } = this.props.gamesStore;
    if (gameBoards.length === 0 || gameBoards.length < (players.length*(players.length-1))/2) {
      let newGameBoards = GenarateGameBoards(players, competition);
      storeGameBoardsInStore(newGameBoards);
    }
  }

  render() {
    const { gameBoards } = this.props.gamesStore;
    // console.log(gameBoards)
    return (
      <div>
        <div className="header-div">
          <Header />
        </div>
        <ContainerDiv>
          <h2>Competition Board</h2>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          {gameBoards.map((game: any, index: number) => {
            return (
              <div key={index}>
                <GameBoard game={game} />
              </div>
            );
          })}
            </Col>
          </Row>
          <Link to="/result/">
            <Button type="danger">Get Result</Button>
          </Link>
        </ContainerDiv>
        <div className="footer-div">
          <Footer />
        </div>
      </div>
    );
  }
}
