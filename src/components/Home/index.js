// Write your code here

import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const HomeBgColor = isDarkTheme ? 'DarkTheme' : 'LightTheme'

      const imgLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const fontColor = isDarkTheme ? 'light-text-color' : 'dark-text-color'
      console.log(isDarkTheme)

      return (
        <div>
          <Navbar />
          <div className={`home-container ${HomeBgColor}`}>
            <img className="home-img" src={imgLogo} alt="home" />
            <h1 className={`${fontColor}`}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
