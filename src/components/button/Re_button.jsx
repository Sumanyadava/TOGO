import React from 'react'
import './Re_button.css'

function Re_button({button_content,onClick}) {
  return (
    <div className='button_temp' onClick={onClick}>{button_content}</div>
  )
}

export default Re_button