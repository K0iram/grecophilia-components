import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

import './style.css'


class Card extends Component {

  render() {
    const { imgSrc, title, subTitle, description, btnText, type, sqMeters, occupancy, price } = this.props

    if(type === 'image-card') {
      return (
        <div className="card-container">
          <div className="title-container">
            <h3>{title}</h3>
            <h5>{subTitle}</h5>
          </div>
          <div className="image-container">
            <img src={imgSrc} style={{height: 200, width: 300}}/>
          </div>
          <div className="text-container">
            <p>{description}</p>
          </div>
          <div className="cta-container">
            <Button label={btnText} size="small"/>
          </div>
        </div>
      )
    }

    if(type === 'room-card') {
      return (
        <div className="card-container">
          <div className="title-container">
            <h3>{title}</h3>
            <h5>{subTitle}</h5>
          </div>
          <div className="image-container">
            <img src={imgSrc} style={{height: 200, width: 300}}/>
          </div>
          <div className="info-container">
            <ul className="room-info">
              <li className="room-info__detail">
                {sqMeters} Sq. Meters
              </li>
              <li className="room-info__detail">
                {occupancy} Guests
              </li>
              <li className="room-info__detail">
                €{price}
              </li>
            </ul>
          </div>
          <div className="cta-container">
            <Button label="More Info" size="small"/>
            <Button label="Book Now" size="small" variant="secondary"/>
          </div>
        </div>
      )
    }
  }
}

Card.propTypes = {
  type: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  btnText: PropTypes.string,
  sqMeters: PropTypes.number,
  occupancy: PropTypes.number,
  price: PropTypes.number
}

export default Card