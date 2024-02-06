import Header from '../../components/header/Header'
import Main from '../../components/main/Main'
import apiData from "../../assets/fakejson.json"
import './Home.css'


import React, { useState } from 'react';

const Home = () => {

  const [data, setData] = useState(apiData)
  const [first, setfirst] = useState([])

  const mainUping = (ToGo) =>{
    // console.log(ToGo)
    setfirst(ToGo)
  }

  return (
    <div className='home'>

      <Header data={data}  mainuping={mainUping}/>
      
      <Main   first={first}  />
    </div>
  )
}

export default Home
