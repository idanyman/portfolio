import React from 'react'

import TerminalButtons from '../TerminalButtons'
import { header, headerTitle } from './index.css'

const TerminalHeader = () => {
  return (
    <div className={header}>
      <TerminalButtons />
      <div className={headerTitle}>Ida's terminal</div>
    </div>
  )
}

export default TerminalHeader
