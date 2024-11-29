import {Component} from 'react'
import './index.css'

class Navbar extends Component {
  render() {
    const {score, time} = this.props
    return (
      <li className="navbar-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="game-logo"
        />
        <div className="time-score-container">
          <p className="score-text">Score:</p>
          <p className="score">{score}</p>
          <div className="time-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer-icon"
            />
            <p className="score">{time} sec</p>
          </div>
        </div>
      </li>
    )
  }
}

export default Navbar
