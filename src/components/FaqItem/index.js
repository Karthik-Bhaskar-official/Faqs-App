// Write your code here.
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isTrue: false}

  change = () => {
    this.setState(prevState => ({isTrue: !prevState.isTrue}))
  }

  render() {
    const {isTrue} = this.state
    const {content} = this.props
    const {questionText, answerText} = content

    const imgSrc = isTrue
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const imgAlt = isTrue ? 'minus' : 'plus'

    return (
      <li>
        <div className="row-container">
          <h1 className="title">{questionText}</h1>
          <button type="button" onClick={this.change}>
            <img src={imgSrc} alt={imgAlt} />
          </button>
        </div>
        {isTrue && (
          <>
            <hr />
            <p className="para">{answerText}</p>
          </>
        )}
      </li>
    )
  }
}

export default Welcome
