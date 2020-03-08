import * as React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';

import ShowResult from '../components/showResult';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface RootProps {
  playersStore: any;
  gamesStore: any;
  competitionStore?:any
}

@inject('playersStore', 'gamesStore','competitionStore')
@observer
export default class Result extends React.Component<RootProps> {
  // constructor(props: RootProps) {
  //   super(props);
  // }
  // componentWillMount() {
  //   document.title = this.props.competitionStore.competition.name
  // }

  componentWillUnmount() {
    document.title = 'Tornado Tennis: Please start a new game'
    this.props.competitionStore.resetCompetitionStore()
    this.props.gamesStore.resetGamesStore()
    this.props.playersStore.resetPlayersStore()
    // console.log(this.props.gamesStore.resetGamesStore)
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
    // console.log(playersList, gamesResult)
    for (let i = 0; i < playersList.length; i++) {
      let player1ScoresArray = gamesResult.map((item: any) => {
        return item.player1 === playersList[i].name ? item.score1 : 0;
      });
      console.log(player1ScoresArray)
      let player2ScoresArray = gamesResult.map((item: any) => {
        return item.player2 === playersList[i].name ? item.score2 : 0;
      });
      console.log(player2ScoresArray)
      playersList[i].score = player1ScoresArray
        .concat(player2ScoresArray)
        .reduce((acc: any, cur: any) => Number(acc) + Number(cur),0);
      console.log(playersList)
    }
    playersList.sort((a: any, b: any) => b.score - a.score);
    console.log(playersList);

    playersList.map((item:any,index:any)=>item.rank=index+1)
    console.log(playersList)
    
    
    //  TODO: if two players have the same score, the rank depended on the game between the two, winner is the higher one
    // for (let i = 0; i < playersList.length-1; i++) {
    //   if ((playersList[i].score = playersList[i + 1].score)) {

    //   }
    // }
    console.log(playersList)
    return (
      <div>
        <div className="header-div">
          <Header />
        </div>
        <h2>Competition Result</h2>
        <ShowResult playersList={playersList} />
        <Link to="/index/">
          <Button type="danger">RESTART</Button>
        </Link>
        <div className="footer-div">
          <Footer />
        </div>
      </div>
    );
  }
}