// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const ChangeTheme = toggleTheme
      const ChangeBgColor = isDarkTheme ? 'DarkColor' : 'LightColor'

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const ThemeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const fontColor = isDarkTheme ? 'light-text-color' : 'dark-text-color'
      return (
        <div className={`Nav-container ${ChangeBgColor}`}>
          <img src={websiteLogo} alt="website logo" />
          <ul className="Nav-list-container">
            <Link to="/">
              <li className={`home-link ${fontColor}`}>Home</li>
            </Link>
            <Link to="/about">
              <li className={`about-link ${fontColor}`}>About</li>
            </Link>
          </ul>
          <button
            data-testid="theme"
            className="ChangeTheme-Btn"
            type="button"
            onClick={ChangeTheme}
          >
            <img src={ThemeImg} alt="Theme" />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
