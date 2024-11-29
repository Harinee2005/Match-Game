import {Component} from 'react'
import './index.css'

class ScoreBoard extends Component {
  onRestart = () => {
    const {onRestartGame} = this.props
    onRestartGame()
  }

  render() {
    const {score} = this.props // Pass score dynamically
    return (
      <div className="scoreboard-bg">
        <div className="scoreboard-content">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
            alt="trophy"
            className="trophy"
          />
          <p className="score-label">YOUR SCORE</p>
          <p className="score-value">{score}</p>
          <button onClick={this.onRestart} type="button" className="replay-btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
            />
            <p>PLAY AGAIN</p>
          </button>
        </div>
      </div>
    )
  }
}

export default ScoreBoard
