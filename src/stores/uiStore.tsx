import { observable } from 'mobx';

class UIStore {
  @observable uiStore = {
    isCompetitionStarted: true,
  }


}

const uiStore = new UIStore();

export default uiStore;