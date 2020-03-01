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
}

@inject('playersStore')
@observer
class playersByGroup extends React.Component<RootProps> {
  constructor(props: RootProps) {
    super(props);
    // console.log(this.props.playersStore)
  }
  render() {
    const { players } = this.props.playersStore;
    const { addPlayer } = this.props.playersStore;
    // console.log("render: ",addPlayer)
    return (
      <>
        <Row>
          <Col xs={24} sm={24} md={24} lg={18} xl={16}>
            <h4>{this.props.group} GROUP</h4>
            <div
              className="players-avatar"
              style={{ display: 'flex', justifyItems: 'space-between', marginRight: '2vh' }}
            >
              {this.props.playersList.map((item: player, index: number) => {
                return (
                  <div key={index}>
                    <ImageAvatars
                      name={item.name}
                      hasButton={true}
                      buttonName="ADD"
                      buttonFunction={() => addPlayer(item.name)}
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
