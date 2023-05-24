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

      <a className='dribbble' href='https://dribbble.com/ai' target='_blank' rel='noreferrer'>
        <img
          src='https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg'
          alt=''
        />
      </a>
      <a className='twitter' target='_top' href='https://twitter.com/aaroniker_me'>
        <svg xmlns='http://www.w3.org/2000/svg' width='72' height='72' viewBox='0 0 72 72'>
          <path d='M67.812 16.141a26.246 26.246 0 0 1-7.519 2.06 13.134 13.134 0 0 0 5.756-7.244 26.127 26.127 0 0 1-8.313 3.176A13.075 13.075 0 0 0 48.182 10c-7.229 0-13.092 5.861-13.092 13.093 0 1.026.118 2.021.338 2.981-10.885-.548-20.528-5.757-26.987-13.679a13.048 13.048 0 0 0-1.771 6.581c0 4.542 2.312 8.551 5.824 10.898a13.048 13.048 0 0 1-5.93-1.638c-.002.055-.002.11-.002.162 0 6.345 4.513 11.638 10.504 12.84a13.177 13.177 0 0 1-3.449.457c-.846 0-1.667-.078-2.465-.231 1.667 5.2 6.499 8.986 12.23 9.09a26.276 26.276 0 0 1-16.26 5.606A26.21 26.21 0 0 1 4 55.976a37.036 37.036 0 0 0 20.067 5.882c24.083 0 37.251-19.949 37.251-37.249 0-.566-.014-1.134-.039-1.694a26.597 26.597 0 0 0 6.533-6.774z'></path>
        </svg>
      </a>
    </div>
  )
}

export default ButtonDelete
