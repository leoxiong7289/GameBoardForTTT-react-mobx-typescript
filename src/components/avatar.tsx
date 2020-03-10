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

// Due to this avatar component will be used in many field, so define these props to control.
// the first two props are compulsory
interface RootProps {
  name: string;
  hasButton: boolean;
  isButtonDisabled?: boolean;
  buttonName?: any;
  buttonType?: any;
  buttonFunction?: any;
}

@observer
export default class ImageAvatars extends React.Component<RootProps> {

  render(){
  return (
    <div>
      <PlayerAvatarCard>
        <Avatar className="avatar" alt={this.props.name} src={`/static/images/avatar/${this.props.name}.jpg`} size={64} />
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
