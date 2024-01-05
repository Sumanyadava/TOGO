import React, { useState } from 'react'
import './Popup.css'

const Popup = () => {

  const [showModel, serShowModel] = useState();
  
    const MyModel = () => {
      <>
      <div className="Popup_message">
            <h1>Want to add Task</h1>
            <button className='Login_button'>Yes</button>
            <button className='Login_button'>No</button>
        </div>
      </>
    }
  }
  return (
    <div className='Popup'>
     
        <button></button>
      
    </div>
  )
}

export default Popup
