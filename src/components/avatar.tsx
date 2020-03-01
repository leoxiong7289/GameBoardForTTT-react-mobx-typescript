import React from 'react';
import styled from 'styled-components';
import { Avatar, Button } from 'antd';
import { buildChildren } from '@babel/types';

// Define a styled Container to wrap the avatar and the name elements
const PlayerAvatarCard = styled.div`
  width: 10vh;
  height: 18vh;
  position: relative;
  border-radius: 2vh;

  &:hover {
    content: '';
    background-color: rebeccapurple;
  }

  .avatar {
    position: absolute;
    top: 1vh;
    left: 1.1vh;
  }

  .avatar-name {
    position: absolute;
    font-size: 3vh;
    top: 10vh;
    left: 2.4vh;
  }

  .avatar-button {
    position: absolute;
    top:12vh;
  }
`;

interface PlayerAvatar {
  name: string,
  hasButton: boolean,
  buttonName: any,
  buttonFunction:any,
}

export default function ImageAvatars(props: PlayerAvatar) {
  return (
    <div>
    <PlayerAvatarCard>
      <Avatar className="avatar" alt={props.name} src={`/static/images/avatar/${props.name}.jpg`} size={64} />
      {/* <Avatar size='small' src={`https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png`} /> */}
      <span className="avatar-name">{props.name}</span>
    </PlayerAvatarCard>
      {props.hasButton && <Button className='avatar-button' type='default' onClick={props.buttonFunction}>{props.buttonName}</Button>}
    </div>
  );
}
