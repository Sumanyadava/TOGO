import React from 'react'
import './Button.css'

function PrimaryButton({button_content,onClick,height,width,fontsize}) {
  return (
    
    <div className='PrimaryButton' onClick={onClick} style={{height:height ,width:width,fontSize:fontsize}}>
      {button_content}
    </div>
  )
}

export default PrimaryButton