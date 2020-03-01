import * as React from 'react';
import { Button } from 'antd'
import {Link} from 'react-router-dom';
import styled from 'styled-components';


import ShowResult from '../components/showResult';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default ()=> {
  const playersList=[
    {
      name: "Leo",
      score: 2,
      result:2
    },
    {
      name: "Leo",
      score: 3,
      result: 1
    },
    {
      name: "Leo",
      score: 1,
      result: 3
    }
  ]

  return(
    <div>
      <div className="header-div">
        <Header />
      </div>
      <h2>Competition Result</h2>
      <ShowResult playersList={playersList} />
      <Link to='/index'>
        <Button type='danger' >RESTART</Button>
      </Link>
      <div className="footer-div">
        <Footer />
      </div>
    </div>
  )

}