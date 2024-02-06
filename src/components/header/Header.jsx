import React, { useEffect, useState } from 'react'
import SearchBar from '../searchbar/SearchBar'
import "./Header.css"



const Header = ({data,mainuping}) => {

  // const [first, setfirst] = useState([])

  


  const uping = (ToGo) => {
    // console.log(ToGo)

    mainuping(ToGo)
    

  }
  
  
  
  return (
    
      <div className="header">

        <SearchBar placeholder="enter placeholder"  data={data} uping={uping} />
        
        
        
        
      </div>
    
  )
}

export default Header
