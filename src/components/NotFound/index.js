// Write your code here

import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const fontColor = isDarkTheme ? 'light-text-color' : 'dark-text-color'
      const ChangeBgColor = isDarkTheme ? 'DarkTheme' : 'LightTheme'

      return (
        <div>
          <Navbar />
          <div className={`NotFound-container ${ChangeBgColor}`}>
            <img
              className="NotFound-img"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
              alt="not found"
            />
            <h1 className={`${fontColor}`}>Lost Your Way?</h1>
            <p className={`${fontColor}`}>
              We cannot seem to find the page your looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
