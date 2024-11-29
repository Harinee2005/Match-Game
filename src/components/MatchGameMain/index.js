import {Component} from 'react'
import './index.css'
import Navbar from '../Navbar'
import TabsList from '../TabsList'
import DisplayImages from '../DisplayImages'
import ScoreBoard from '../ScoreBoard'

class MatchGameMain extends Component {
  state = {
    score: 0,
    time: 60,
    presentTab: 'FRUIT',
    imageIndex: 0,
    isGameEnd: false,
  }

  onRestart = () => {
    this.setState({
      score: 0,
      time: 60,
      presentTab: 'FRUIT',
      imageIndex: 0,
      isGameEnd: false,
    })
    this.timerId = setInterval(this.tick, 1000)
  }

  onChangeTab = tabId => {
    this.setState({presentTab: tabId})
  }

  tick = () => {
    const {time} = this.state
    if (time > 0) {
      this.setState(prevState => ({
        time: prevState.time - 1,
      }))
    } else {
      clearInterval(this.timerId)
      this.setState({isGameEnd: true})
    }
  }

  changeThumbnail = () => {
    const {imagesList} = this.props
    const imageIndex = Math.floor(Math.random() * imagesList.length)
    this.setState({imageIndex})
  }

  componentDidMount = () => {
    this.timerId = setInterval(this.tick, 1000)
  }

  onFoundImage = imgId => {
    const {imageIndex} = this.state
    const {imagesList} = this.props
    const {id} = imagesList[imageIndex]
    if (imgId === id) {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
      this.changeThumbnail()
    } else {
      this.setState({isGameEnd: true})
    }
  }

  render() {
    const {score, time, presentTab, imageIndex, isGameEnd} = this.state
    const {imagesList, tabsList} = this.props
    const {imageUrl} = imagesList[imageIndex]
    const filteredImagesList = imagesList.filter(
      eachImage => eachImage.category === presentTab,
    )

    return (
      <div>
        <ul className="navbar-container">
          <Navbar score={score} time={time} />
        </ul>

        {!isGameEnd && (
          <div className="background">
            <img className="thumbnail" src={imageUrl} alt="match" />
            <ul className="tabs-list-container">
              {tabsList.map(eachTab => (
                <TabsList
                  onChangeTabs={this.onChangeTab}
                  details={eachTab}
                  key={eachTab.tabId}
                  presentTab={presentTab}
                />
              ))}
            </ul>
            <ul className="images-container">
              {filteredImagesList.map(eachItem => (
                <DisplayImages
                  onImgFound={this.onFoundImage}
                  details={eachItem}
                  key={`${eachItem.thumbnailUrl}-${eachItem.category}`}
                />
              ))}
            </ul>
          </div>
        )}
        {isGameEnd && (
          <div className="background-score">
            <ScoreBoard onRestartGame={this.onRestart} score={score} />
          </div>
        )}
      </div>
    )
  }
}

export default MatchGameMain
