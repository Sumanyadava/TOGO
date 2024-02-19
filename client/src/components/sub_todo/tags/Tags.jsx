import React from 'react'
import './Tags.css'

const Tags = ({type,onClick,tags_content}) => {

  
  return (
    <div className={type} onClick={onClick}>
      {tags_content}
    </div>
  )
}

export default Tags
