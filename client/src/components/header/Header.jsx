import React, { useEffect, useState } from 'react'
import SearchBar from '../searchbar/SearchBar'
import "./Header.css"



const Header = ({data,mainuping}) => {

  // const [first, setfirst] = useState([])

  


  const headeruping = (ToGo) => {
    // console.log(ToGo)

    mainuping(ToGo)
    

  }
  
  
  
  return (
    
      <div className="header">

        <SearchBar placeholder="enter placeholder"  data={data} headeruping={headeruping} />
        
        
        
        
      </div>
    
  )
}

export default Header
