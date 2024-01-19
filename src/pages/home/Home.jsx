import Header from '../../components/header/Header'
import Main from '../../components/main/Main'
import React, { useState } from 'react';
import Popup from '../../components/popup/Popup';
import apiData from "../../assets/fakejson.json"

import './Home.css'

const Home = () => {

  const [data, setData] = useState(apiData)
  const [first, setfirst] = useState([])

  const aac= (ToGo) =>{
    setfirst(ToGo)
  }

  return (
    <div className='home'>
      <Header data={data} aac={aac}/>
      
      <Main  data={data} first={first}/>
    </div>
  )
}

export default Home
