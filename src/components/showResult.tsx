import * as React from 'react';
import ImageAvatar from './avatar';
import styled from 'styled-components';
import { Table } from 'antd';

const ContainerDiv = styled.div`
  margin: 0 auto;
  width:600px;
  background-color: #aaa;
`
interface player {
  name: string;
  score: number;
  rank: number;
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (name:any) => <ImageAvatar name={name} hasButton={false} />
  },
  {
    title: 'Score',
    dataIndex: 'score',
    key: 'score',
  },
  {
    title: 'Rank',
    dataIndex: 'rank',
    key: 'rank',
  },
]

export default (props: any) => {
  return (
    <ContainerDiv>
      <Table dataSource={props.playersList}  columns={columns} size='large' />
    </ContainerDiv>
  );
};
