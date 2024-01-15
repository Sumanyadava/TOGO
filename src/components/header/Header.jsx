import React from 'react'
import SearchBar from '../searchbar/SearchBar'
import "./Header.css"
import data from '../../assets/books.json'

const Header = () => {
  return (
    
      <div className="header">

        <SearchBar placeholder="enter placeholder" data={data}/>
        
      </div>
    
  )
}

export default Header
