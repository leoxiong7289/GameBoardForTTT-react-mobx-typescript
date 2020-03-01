import { observable, action } from 'mobx';

interface PlayerElement {
  name: any;
  group: any;
  score: any;
  rank: any;
}

class PlayersClass {
  @observable players: PlayerElement[] = [];

  @action.bound
  addPlayer(name: any) {
    let playerElement = {
      name: '',
      group: '',
      score: 0,
      rank: 0
    };
    playerElement.name = name;
    this.players.push(playerElement);
    console.log(this.players);
  }
  @action.bound
  deletePlayer(index: any) {
    this.players.splice(index,1)
    console.log(this.players);
  }
}

const playersStore = new PlayersClass();

export default playersStore;
