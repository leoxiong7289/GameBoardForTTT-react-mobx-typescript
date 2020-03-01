import React from 'react';
import ImageAvatars from './avatar';
import { Row, Col } from 'antd';
import {observer, inject} from 'mobx-react';

interface RootProps {
  playersStore?: any
  playersList: any
}

@inject('playersStore')
@observer
class playersList extends React.Component<RootProps> {
  render(){
    const {deletePlayer} = this.props.playersStore
    const {players} = this.props.playersStore
  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={18} xl={16}>
        <h4>Selected Players</h4>
        <div className="players-list" style={{ display: 'flex', justifyItems: 'space-between', marginRight: '2vh' }}>
          {this.props.playersList.map((item: string, index: number) => {
            return (
              <div key={index}>
                <ImageAvatars name={item} hasButton={true} buttonName='DELETE' buttonFunction={()=>deletePlayer(index)} />
              </div>
            );
          })}
        </div>
      </Col>
    </Row>
  );}
};

export default playersList
