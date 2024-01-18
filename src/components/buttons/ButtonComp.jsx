import React from 'react'
import './Button.css'

// in type you have to mention button type (primary or secoundary) and size(button_small , .._medium , .._large)

function ButtonComp({button_content,onClick,type}) {
  return (
    
    <button className={type} onClick={onClick} >
      {button_content}
      
    </button>
  )
}

export default ButtonComp