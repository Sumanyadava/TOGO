import React, { useState } from 'react'
import SearchBar from '../searchbar/SearchBar'
import "./Header.css"



const Header = ({data, aac}) => {

  // const [first, setfirst] = useState([])
  const abc = (ToGo)=>{
    aac(ToGo)
  }
  return (
    
      <div className="header">

        <SearchBar placeholder="enter placeholder"  data={data} abc={abc} />

        
        
      </div>
    
  )
}

export default Header
