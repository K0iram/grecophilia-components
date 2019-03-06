import React, { Component } from 'react'

import './style.css'


class Card extends Component {

  render() {
    const { imgSrc, title, description } = this.props
    return (
      <div className="card-container">
        <div className="image-container">
          <img src={imgSrc} style={{height: 200, width: 300}}/>
        </div>
        <div>
          <h3>{title}</h3>
          <div className="text-container">
            <p>{description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Card