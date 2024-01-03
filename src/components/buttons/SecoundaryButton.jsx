import React from 'react'
import './Button.css'

const SecoundaryButton = ({button_content,onClick,height,width,fontsize,size}) => {
  // const btnDim = size == "large" ? {height: 20px , width: 20px }
  
  return (

    <div className='SecoundaryButton' onClick={onClick} style={{height:height ,width:width,fontSize:fontsize}}>
      {button_content}
    </div>
  )
}

export default SecoundaryButton
