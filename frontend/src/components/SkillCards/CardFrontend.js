import { FiAlignCenter } from 'react-icons/fi'
import './Skillcard.scss'

// Skill card frontend
const CardFrontend = () => {
  return (
    <div className='skillCard__wrapper skillCard__frontend'>
      <FiAlignCenter className='skillCard__icon' />
      <h2 className='skillCard__h2'>Front-End</h2>
      <ul className='skillCard__list'>
        <li className='skillCard__item'>JavaScript | ES6+</li>
        <li className='skillCard__item'>TypeScript</li>
        <li className='skillCard__item'>React | Hooks</li>
        <li className='skillCard__item'>Redux | Toolkit</li>
        <li className='skillCard__item'>HTML5 | CSS3 | SCSS</li>
        <li className='skillCard__item'>Material UI</li>
      </ul>
    </div>
  )
}

export default CardFrontend
