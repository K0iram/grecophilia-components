import React, { Component } from 'react'

import './style.css'


class Button extends Component {

  render() {
    const { label, size, variant } = this.props
    return (
      <button className={`${size} ${variant}`}>
        {this.props.label}
      </button>
    )
  }
}

export default Button