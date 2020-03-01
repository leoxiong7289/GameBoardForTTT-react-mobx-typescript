import React from 'react';
import logo from './logo.svg';
import './App.css';
import { observer, inject } from 'mobx-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Index from './pages';
import Players from './pages/players';
import Board from './pages/board';
import result from './pages/result';


interface RootProps {
}
@inject()
@observer
class App extends React.Component<RootProps> {

  constructor(props:any){
    super(props)
  }

  render() {
    return (
      <Router>
        <Route path='/board/' exact component={Board} />
        <Route path='/result/' exact component={result} />
        <Route path='/players/' exact component={Players} />
        <Route path='/index/' exact component={Index} />
        <Route path='/' exact component={Index} />
      </Router>
    );
  }
}

export default App;
