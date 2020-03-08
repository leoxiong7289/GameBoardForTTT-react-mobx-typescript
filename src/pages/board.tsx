import * as React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';

import GameBoard from '../components/gameBoard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GenarateGameBoards from '../components/genarateGameBoards';

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
        <div>
          <h2>Competition Board</h2>
          {gameBoards.map((game: any, index: number) => {
            return (
              <div key={index}>
                <GameBoard game={game} />
              </div>
            );
          })}
          <Link to="/result/">
            <Button type="danger">RESULT</Button>
          </Link>
        </div>
        <div className="footer-div">
          <Footer />
        </div>
      </div>
    );
  }
}
