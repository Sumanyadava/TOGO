import React from 'react'

const CircleButton = ({button_content,onClick,height,width,fontsize,tittle_prop }) => {
  return (
    <div className='CircleButton' title={tittle_prop} onClick={onClick} style={{height:height ,width:width,fontSize:fontsize}}>
      {button_content}
   
    </div>
  )
}

export default CircleButton
