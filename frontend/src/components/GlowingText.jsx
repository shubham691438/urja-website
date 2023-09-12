import React from 'react'
import '../assets/styles/glowingTextStyle.css'

const GlowingText = ({text,fontSize}) => {
  return (
    <h1 className='glow ' style={{fontSize:fontSize||"30px"}} >{text}</h1>
  )
}

export default GlowingText