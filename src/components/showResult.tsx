import * as React from 'react';
import ImageAvatar from './avatar';

interface player {
  name: string;
  score: number;
  result: number;
}

export default (props: any) => {
  return (
    <table>
      <tbody>
        {props.playersList.map((player: player, index: number) => {
          return (
            <tr key={index} style={{ border: '1px solid #000' }}>
              <td style={{ border: '1px solid #000' }}>
                <ImageAvatar name={player.name} hasButton={false} buttonName='' buttonFunction='' />
              </td>
              <td style={{ border: '1px solid #000' }}>{player.score}</td>
              <td style={{ border: '1px solid #000' }}>{`第${player.result}名`}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
