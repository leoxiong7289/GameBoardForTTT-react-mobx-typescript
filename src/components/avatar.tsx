import React from 'react';
import styled from 'styled-components';
import { Avatar, Button } from 'antd';
import { observer } from 'mobx-react';

// Define a styled Container to wrap the avatar and the name elements
const PlayerAvatarCard = styled.div`
  width: 15vh;
  height: 20vh;
  position: relative;
  border-radius: 2vh;
  margin: 0 auto;

  &:hover {
    content: '';
    background-color: rebeccapurple;
  }

  .avatar {
    position: absolute;
    
    top: 1vh;
    left: 3.5vh;
  }

  .avatar-name {
    position: absolute;
    font-size: 2vh;
    top: 10vh;
    left: 2.5vh;
  }

  .avatar-button {
    position: absolute;
    top: 16vh;
    left:3.5vh;
  }
`;

interface RootProps {
  name: string;
  hasButton: boolean;
  isButtonDisabled?: boolean;
  buttonName?: any;
  buttonType?: any;
  buttonFunction?: any;
}

// interface RootState {
//   isAddButtonDisabled?: boolean,
// }
@observer
export default class ImageAvatars extends React.Component<RootProps> {
  // constructor(props:RootProps) {
  //   super(props)
    // this.state={
    //   isAddButtonDisabled: this.props.isButtonDisabled
    // }
  // }

  render(){
  return (
    <div>
      <PlayerAvatarCard>
        <Avatar className="avatar" alt={this.props.name} src={`/static/images/avatar/${this.props.name}.jpg`} size={64} />
        {/* <Avatar size='small' src={`https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png`} /> */}
        <span className="avatar-name">{this.props.name}</span>
      {this.props.hasButton && (
        <Button
          className="avatar-button"
          type={this.props.buttonType}
          disabled={this.props.isButtonDisabled}
          onClick={this.props.buttonFunction}
        >
          {this.props.buttonName}
        </Button>
      )}
      </PlayerAvatarCard>
    </div>
  );}
}
