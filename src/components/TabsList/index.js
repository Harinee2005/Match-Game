import {Component} from 'react'
import './index.css'

class TabsList extends Component {
  onChangingTabs = () => {
    const {onChangeTabs, details} = this.props
    const {tabId} = details
    onChangeTabs(tabId)
  }

  render() {
    const {details, presentTab} = this.props
    const {displayText, tabId} = details
    const presentTabStyle = presentTab === tabId ? 'HighlightButton' : ''
    return (
      <li className="tabs-list">
        <button
          onClick={this.onChangingTabs}
          type="button"
          className={`tab-btn ${presentTabStyle}`}
        >
          {displayText}
        </button>
      </li>
    )
  }
}

export default TabsList
