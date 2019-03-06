import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.css'


class Button extends Component {

  render() {
    const { label, size, variant } = this.props
    return (
      <button className={`${size} ${variant} default`}>
        {this.props.label}
      </button>
    )
  }

  static defaultProps = {
    size: "medium",
    variant: "primary",
    onClick: () => {}
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func
}

export default Button