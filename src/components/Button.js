import React from 'react'
import './Button.css'

const Button = ({onClick, children}) => {
  return (
    <button className="sub_butt"
    onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button