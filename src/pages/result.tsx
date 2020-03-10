import * as React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';

import ShowResult from '../components/showResult';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContainerDiv = styled.div`
  margin: 0 auto;
  width: 80%;
  background-color: #ccc;
`;
interface RootProps {
  playersStore: any;
  gamesStore: any;
  competitionStore?: any;
}

@inject('playersStore', 'gamesStore', 'competitionStore')
@observer
export default class Result extends React.Component<RootProps> {

  //clear all the stores value when jumping to index page
  componentWillUnmount() {
    document.title = 'Tornado Tennis: Please start a new game';
    this.props.competitionStore.resetCompetitionStore();
    this.props.gamesStore.resetGamesStore();
    this.props.playersStore.resetPlayersStore();
  }

  render() {
    const { players } = this.props.playersStore;
    const playersList = players.map((item: any) => {
      return {
        name: item.name,
        score: item.score,
        rank: item.rank
      };
    });
    const { gameBoards } = this.props.gamesStore;
    const gamesResult = gameBoards.map((item: any) => {
      return {
        gameId: item.gameID,
        player1: item.player1,
        score1: item.score1,
        player2: item.player2,
        score2: item.score2
      };
    });

    // calculate the competition result from the gameBoards store
    for (let i = 0; i < playersList.length; i++) {
      let player1ScoresArray = gamesResult.map((item: any) => {
        return item.player1 === playersList[i].name ? item.score1 : 0;
      });
      console.log(player1ScoresArray);
      let player2ScoresArray = gamesResult.map((item: any) => {
        return item.player2 === playersList[i].name ? item.score2 : 0;
      });
      console.log(player2ScoresArray);
      playersList[i].score = player1ScoresArray
        .concat(player2ScoresArray)
        .reduce((acc: any, cur: any) => Number(acc) + Number(cur), 0);
      console.log(playersList);
    }
    playersList.sort((a: any, b: any) => b.score - a.score);
    console.log(playersList);

    playersList.map((item: any, index: any) => (item.rank = index + 1));
    console.log(playersList);

    // TODO: if two players have the same score, the rank depended on the game between the two, winner is the higher one

    console.log(playersList);
    return (
      <div>
        <div className="header-div">
          <Header />
        </div>
        <ContainerDiv>
          <h2>Competition Result</h2>
          <ShowResult playersList={playersList} />
          <Link to="/index/">
            <Button type="danger">Restart New Competition</Button>
          </Link>
        </ContainerDiv>
        <div className="footer-div">
          <Footer />
        </div>
      </div>
    );
  }
}
