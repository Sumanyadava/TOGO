import React from 'react'
import './test.css'
import PrimaryButton from '../../components/buttons/ButtonComp'

const test = () => {
  return (
    <div className='test'>
      
      {/* <h1>Buttons</h1> */}
      <PrimaryButton button_content="hello" type="PrimaryButton button_large"/>

      <PrimaryButton button_content="hello world" type="PrimaryButton button_small"/>

      <PrimaryButton button_content="just tek" type="PrimaryButton button_medium"/>

      <PrimaryButton button_content="hello world" type="SecoundaryButton button_small"/>

      <PrimaryButton button_content="just tek" type="SecoundaryButton button_large"/>

      <PrimaryButton button_content="j" type="CircleButton button_medium"/>



    </div>
  )
}

export default test
