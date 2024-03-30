import Header from '../../components/header/Header'
import Main from '../../components/main/Main'
import apiData from "../../assets/fakejson.json"
import './Home.css'


import React, { useState } from 'react';

const Home = () => {

  const [data, setData] = useState(apiData)
  const [mainprop, setmainprop] = useState([])

  const mainUping = (ToGo) =>{
    setmainprop(ToGo)
  }

  return (
    <div className='home'>

      <Header data={data}  mainuping={mainUping}/>
      
      <Main   mainprop={mainprop}  />
    </div>
  )
}

export default Home
