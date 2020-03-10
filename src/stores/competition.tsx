import { observable, action } from 'mobx';

class CompetitionClass {
  @observable competition = {
    name: '',
    style: '',
  };

  @action.bound 
  storeCompetitionInStore(competition:any) {
    this.competition = competition
    console.log('competition name in store: '+this.competition.name)
  }

  @action.bound
  resetCompetitionStore() {
    this.competition.name = ''
  }
}

const competitionStore = new CompetitionClass();

export default competitionStore;
