import * as React from 'react'
import { ButtonDeleteProps } from './interfaces'

const ButtonDelete: React.FC<ButtonDeleteProps> = (props) => {
  const { children, onClick, onDeleteSuccess, ...rest } = props
  const [buttonActive, setbuttonActive] = React.useState(false)

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (!buttonActive) setbuttonActive(true)
    onClick?.(e)
  }

  React.useEffect(() => {
    if (buttonActive) {
      setTimeout(() => {
        setbuttonActive(false)
        onDeleteSuccess?.()
      }, 3200)
    }
  }, [buttonActive])

  return (
    <div>
      <button {...rest} className={`button ${!!buttonActive && 'delete'}`} onClick={handleClick}>
        <div className='trash'>
          <div className='top'>
            <div className='paper'></div>
          </div>
          <div className='box'></div>
          <div className='check'>
            <svg viewBox='0 0 8 6'>
              <polyline points='1 3.4 2.71428571 5 7 1'></polyline>
            </svg>
          </div>
        </div>
        <span>{children}</span>
      </button>
    </div>
  )
}

export default ButtonDelete
