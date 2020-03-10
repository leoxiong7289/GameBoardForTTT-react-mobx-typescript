import * as React from 'react';
import { Row, Col } from 'antd';
import ImageAvatars from './avatar';
import { observer, inject } from 'mobx-react';

interface player {
  name: string;
  score: number;
}

interface RootProps {
  group?: any;
  playersList?: any;
  playersStore?: any;
}

// This component is to display a group players list, including the avatar element and a ADD button
@inject('playersStore')
@observer
class playersByGroup extends React.Component<RootProps> {
  render() {
    const { addPlayer } = this.props.playersStore;
    // this avatarAddButtonStatusGroup is a array,  and is used to control very ADD button state
    const { avatarAddButtonStatusGroup } = this.props.playersStore;
    return (
      <>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <h2 style={{ fontSize: '4vh', color: '#f0f' }}>{this.props.group} GROUP</h2>
            <div
              className="players-avatar"
              style={{ display: 'flex', justifyItems: 'space-between', marginRight: '2vh', flexWrap: 'wrap' }}
            >
              {this.props.playersList.map((player: player, index: number) => {
                return (
                  <div key={index} className={`${player.name}-card`}>
                    <ImageAvatars
                      name={player.name}
                      hasButton={true}
                      buttonName="ADD"
                      buttonFunction={() => addPlayer(player.name)}
                      isButtonDisabled={
                        avatarAddButtonStatusGroup.filter((item: any) => item.name == player.name)[0][
                          'isButtonDisabled'
                        ]
                      }
                    />
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default playersByGroup;
