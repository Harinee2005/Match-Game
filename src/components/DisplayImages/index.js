import {Component} from 'react'
import './index.css'

class DisplayImages extends Component {
  onClickImg = () => {
    const {onImgFound, details} = this.props
    const {id} = details
    onImgFound(id)
  }

  render() {
    const {details} = this.props
    const {thumbnailUrl} = details
    return (
      <li className="tabs-list">
        <button onClick={this.onClickImg} type="button" className="image-btn">
          <img className="images-lists" src={thumbnailUrl} alt="thumbnail" />
        </button>
      </li>
    )
  }
}

export default DisplayImages
