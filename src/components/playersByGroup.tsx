import * as React from 'react';
import { Row, Col } from 'antd';
import ImageAvatars from './avatar';
// import playersList from './playersList';
import { observer, inject } from 'mobx-react';

interface player {
  name: string;
  score: number;
}

interface RootProps {
  group?: any;
  playersList?: any;
  playersStore?: any;
  // uiStore?: any,
}

@inject('playersStore')
@observer
class playersByGroup extends React.Component<RootProps> {
  // constructor(props: RootProps) {
  //   super(props);
  //   // console.log(this.props.playersStore)
  // }
  render() {
    // const { players } = this.props.playersStore;
    const { addPlayer } = this.props.playersStore;
    const { avatarAddButtonStatusGroup } = this.props.playersStore;
    // console.log(avatarAddButtonStatusGroup.filter((item:any)=>item.name=='Jim Wang')[0]['isButtonDisabled'])
    // console.log("render: ",addPlayer)
    return (
      <>
        <Row>
          <Col xs={24} sm={24} md={24} lg={18} xl={16}>
            <h4>{this.props.group} GROUP</h4>
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
