// Write your code here.
import {Component} from 'react'
import Welcome from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">FAQs</h1>
          <ul>
            {faqsList.map(each => (
              <Welcome content={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
