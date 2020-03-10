import { observable, action } from 'mobx';

interface game {
  gameID: number;
  player1: string;
  score1: number;
  player2: string;
  score2: number;
}

class GamesClass {
  @observable gameBoards: game[] = [];

  @action.bound
  storeGameBoardsInStore(games:game[]) {
    this.gameBoards = games  
  }

  @action.bound
  handleSubmitScore(gameScore:game) {
    let indexOfGame = gameScore.gameID-1
    this.gameBoards.splice(indexOfGame,1,gameScore)
    console.log(this.gameBoards[indexOfGame])
    
  }
  @action.bound
  handleResetScore(gameID:any) {
    let indexOfGame = gameID-1
    this.gameBoards[indexOfGame].score1 = 0
    this.gameBoards[indexOfGame].score2 = 0
    console.log(this.gameBoards[indexOfGame])
  }

  @action.bound
  resetGamesStore() {
    this.gameBoards = []
  }
} 

const gamesStore = new GamesClass();

export default gamesStore;
