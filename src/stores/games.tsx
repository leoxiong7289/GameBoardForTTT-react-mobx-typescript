import { observable } from 'mobx';

class GamesClass {
  @observable games= [
    {
      id: 1,
      player1: "Leo",
      score1: 0,
      player2: "Ben",
      score2:0
    },
    {
      id: 2,
      player1: "Leo",
      score1: 0,
      player2: "Ben",
      score2:0
    },
    {
      id: 3,
      player1: "Leo",
      score1: 0,
      player2: "Ben",
      score2:0
    },
  ]
}

const gamesStore = new GamesClass();

export default gamesStore;