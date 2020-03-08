import { observable, action } from 'mobx';

interface PlayerElement {
  name: any;
  score: number;
  rank: number;
}

interface ButtonStateGroup {
  name?: string;
  isButtonDisabled?: boolean;
}

class PlayersClass {
  @observable players: PlayerElement[] = [];
  @observable avatarAddButtonStatusGroup: ButtonStateGroup[] = [];


  @action.bound
  addPlayer(name: any) {
    let playerElement = {
      name: '',
      score: 0,
      rank: 0
    };
    playerElement.name = name;
    this.players.push(playerElement);
    let indexOfAllplayers = this.avatarAddButtonStatusGroup.findIndex((item: any) => item.name == name);
    this.avatarAddButtonStatusGroup[indexOfAllplayers].isButtonDisabled = true;
  }

  @action.bound
  deletePlayer(index: any, name: any) {
    this.players.splice(index, 1);
    let indexOfAllplayers = this.avatarAddButtonStatusGroup.findIndex((item: any) => item.name == name);
    this.avatarAddButtonStatusGroup[indexOfAllplayers].isButtonDisabled = false;
  }

  @action.bound
  createAllPlayersCardAddButtonStatus(buttonStateGroup: any) {
    this.avatarAddButtonStatusGroup = buttonStateGroup;
  }

  @action.bound
  resetPlayersStore() {
    this.players = []
    this.avatarAddButtonStatusGroup = []
    // console.log(this.players)
  }
}

const playersStore = new PlayersClass();

export default playersStore;
