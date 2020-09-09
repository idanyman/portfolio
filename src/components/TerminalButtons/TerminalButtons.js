import React from 'react'

import {
  button,
  buttonClose,
  buttonMaximize,
  buttonMinimize,
  container,
} from './index.css'

const TerminalButtons = () => {
  return (
    <div className={container}>
      <button className={`${button} ${buttonClose}`}></button>
      <button className={`${button} ${buttonMinimize}`}></button>
      <button className={`${button} ${buttonMaximize}`}></button>
    </div>
  )
}

export default TerminalButtons
