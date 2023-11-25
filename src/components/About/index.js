// Write your code here

import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const AboutBgColor = isDarkTheme ? 'DarkTheme' : 'LightTheme'

      const imgLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const fontColor = isDarkTheme ? 'light-text-color' : 'dark-text-color'

      return (
        <div>
          <Navbar />
          <div className={`about-container ${AboutBgColor}`}>
            <img className="about-img" src={imgLogo} alt="about" />
            <h1 className={`${fontColor}`}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
