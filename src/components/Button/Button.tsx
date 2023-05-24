import * as React from 'react'
import { ButtonProps } from './interfaces'

const Button: React.FC<ButtonProps> = (props) => {
  const { children, ..._props } = props

  return (
    <div>
      <button {..._props}>{children}</button>
    </div>
  )
}

export default Button
