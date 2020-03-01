import * as React from 'react';
import { Button } from 'antd'
import {Link} from 'react-router-dom';
import styled from 'styled-components';


import GameBoard from '../components/gameBoard';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default ()=> {
  const games=[
    {
      gameID:1,
      p1: 'Leo',
      s1: 0,
      p2: 'Leo',
      s2: 0,
    },
    {
      gameID:2,
      p1: 'Leo',
      s1: 0,
      p2: 'Leo',
      s2: 0,
    }
  ]

  return(
    <div>
      <div className="header-div">
        <Header />
      </div>
      <h2>Competition Board</h2>
      {
        games.map((game:any,index:number)=> {
          return(
            <div key={index}>
            <GameBoard game={game}/>
            </div>
          )
        })
      }
      <Link to='/result'>
        <Button type='danger' >RESULT</Button>
      </Link>
      <div className="footer-div">
        <Footer />
      </div>
    </div>
  )

}