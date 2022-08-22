import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
  render() {
    return (
      <div className='ColorBox' style={{backgroundColor: this.props.backgroundColor}}>
        <span>{this.props.name}</span>
      </div>
    )
  }
}

export default ColorBox;