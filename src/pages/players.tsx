import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Checkbox } from 'antd';
import styled from 'styled-components';

import PlayersByGroup from '../components/playersByGroup';
import PlayersList from '../components/playersList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { observer, inject } from 'mobx-react';

const ContentDiv = styled.div`
  margin: 0 auto;
  background-color: #ccc;
`;
interface RootProps {
  playersStore?: any;
}

interface RootState {
  groups?: any;
  displayedGroup?: any;
  allPlayers?: any;
}

@inject('playersStore')
@observer
class Players extends React.Component<RootProps, RootState> {
  constructor(props: any) {
    super(props);
    // console.log(this.props)
    this.state = {
      groups: [],
      displayedGroup: [],
      allPlayers: []
    };
    this.handleClick = this.handleClick.bind(this)
    this.filterPlayersByGroup = this.filterPlayersByGroup.bind(this)
  }

  componentWillMount() {
    axios
      .get(
        'https://cdn.contentful.com/spaces/17oqlsgq9laf/environments/master/entries?access_token=jyXkHPkW7z0fbBiWFDJckuq0w6U1tMHO7wQI7cFxyzg'
      )
      .then(res => {
        let allPlayers = res.data.items.map((item: any) => ({
          name: item.fields.playerName,
          group: item.fields.group
        }));
        // console.log(allPlayers);
        let groups = Array.from(new Set(allPlayers.map((item: any) => item.group))).sort();
        // console.log(groups);
        this.setState({ allPlayers, groups });
      });
  }

  handleClick(checkedValues: any): void {
    this.setState({
      displayedGroup: checkedValues
    });
    // console.log(this.state.displayedGroup)
  }

  filterPlayersByGroup(allPlayers:any,groupName:any):any{
    let playersListByGroup = allPlayers.filter((player:any)=>player.group==groupName)
    // console.log(playersListByGroup)
    return playersListByGroup
  }

  render() {
    const { players } = this.props.playersStore;
    const playersList = players.slice().map((item: any) => item.name);
    const allPlayers = this.state.allPlayers
    console.log(players)
    // console.log(allPlayers.filter((player:any)=>player.group=='A'? player.name:null));
    // console.log(allPlayers)
    return (
      <div>
        <div className="header-div">
          <Header />
        </div>
        <ContentDiv>
          <div className="group-select">
            <h3 className="selectgroups">Please Select Groups</h3>
            <Checkbox.Group options={this.state.groups} onChange={this.handleClick} />
          </div>
          {this.state.displayedGroup.map((groupName: any, index: any) => {
            return (
              <div className={`${groupName}PlayersList`} key={groupName + index}>
                <PlayersByGroup
                  playersList={this.filterPlayersByGroup(allPlayers,groupName)}
                  group={groupName}
                />
              </div>
            );
          })}
          {players.length > 0 ? <PlayersList playersList={playersList} /> : <>{players}</>}
          <Link to="/board/">
            <Button type="danger">BEGIN</Button>
          </Link>
        </ContentDiv>
        <div className="footer-div">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Players;
