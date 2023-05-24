import * as React from 'react'
import { ButtonDeleteProps } from './interfaces'

const ButtonDelete: React.FC<ButtonDeleteProps> = (props) => {
  const { ...rest } = props
  const [buttonActive, setbuttonActive] = React.useState(false)
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (!buttonActive) setbuttonActive(true)
  }

  React.useEffect(() => {
    if (buttonActive) {
      setTimeout(() => {
        setbuttonActive(false)
      }, 3200)
    }
  }, [buttonActive])

  return (
    <div>
      <button {...rest} className={`button ${buttonActive && 'delete'}`} onClick={handleClick}>
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
        <span>Delete Item</span>
      </button>
    </div>
  )
}

export default ButtonDelete
