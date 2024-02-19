import React, { useState } from 'react'
import './Popup.css'

const Popup = () => {

  const [showModel, setShowModel] = useState(false);

  const closeModel = () => {
    setShowModel(false);
  }
  
    const MyModel = () => {
      return (
      <div className="popup_contain">
      <div className="all"></div>
      <div className="Popup_message">
        <div className="message_container">
            <h1 className='Popup_add_tittle'>Want to add Task</h1>
            <p><h3>Task details here... </h3>
            <h4>name: lorem</h4>
            <h4>Form:</h4>
            <h4>Tags:</h4>

            </p>

            <div className="Popup_buttons">
            <button className='Login_button'>Yes</button>
            <button className='Login_button' onClick={() => setShowModel(false)}>No</button>
            </div>
            </div>
        </div>
      </div>
      )
    }
  
  return (
    <div className='Popup'>
     
        <button className='popup_button' onClick={() => setShowModel(true)}>add</button>
      {showModel && <MyModel />}
    </div>
  )
}

export default Popup
