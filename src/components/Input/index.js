import React, { Component } from 'react'

import './style.css'


class Input extends Component {

  render() {
    const { label } = this.props
    return (
      <div>
        <input type="text" placeholder={label}/>
      </div>
    )
  }
}

export default Input