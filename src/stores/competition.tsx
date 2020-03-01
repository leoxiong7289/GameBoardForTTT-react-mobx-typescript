import { observable, computed, action } from 'mobx';

class CompetitionClass {
  @observable competition = {
    name: 'Leo',
    mode: '3',
    style: 'single',
  };

  
}

const competitionStore = new CompetitionClass();

export default competitionStore;
