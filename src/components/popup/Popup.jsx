import React, { useState } from 'react'
import './Popup.css'

const Popup = () => {

  const [showModel, setShowModel] = useState(false);
  
    const MyModel = () => {
      return (
      <>
      <div className="Popup_message">
            <h1>Want to add Task</h1>
            <button className='Login_button'>Yes</button>
            <button className='Login_button' onClick={() => setShowModel(false)}>No</button>
        </div>
      </>
      )
    }
  
  return (
    <div className='Popup'>
     
        <button className='nnt' onClick={() => setShowModel(true)}></button>
      {showModel && <MyModel />}
    </div>
  )
}

export default Popup
