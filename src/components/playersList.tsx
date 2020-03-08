import React from 'react';
import ImageAvatars from './avatar';
import { Row, Col } from 'antd';
import { observer, inject } from 'mobx-react';

interface RootProps {
  playersStore?: any;
  playersList: any;
}

@inject('playersStore')
@observer
class playersList extends React.Component<RootProps> {
  render() {
    const { deletePlayer } = this.props.playersStore;
    return (
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <h4>Selected Players</h4>
          <div
            className="players-list"
            style={{ display: 'flex', justifyItems: 'space-between', marginRight: '2vh', flexWrap: 'wrap' }}
          >
            {this.props.playersList.map((name: string, index: number) => {
              return (
                <div key={index}>
                  <ImageAvatars
                    name={name}
                    hasButton={true}
                    buttonName="DELETE"
                    buttonFunction={() => deletePlayer(index, name)}
                  />
                </div>
              );
            })}
          </div>
        </Col>
      </Row>
    );
  }
}

export default playersList;
