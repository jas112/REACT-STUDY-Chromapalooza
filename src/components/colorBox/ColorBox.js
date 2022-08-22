import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
  render() {
    
    const {backgroundColor, name} = this.props;

    return (
      <div className='ColorBox' style={{backgroundColor: backgroundColor}}>
        <div className='copy-element-container'>
            <div className='box-content'>
                <span>{name}</span>
            </div>
            <button className='copy-element-btn'>Copy</button>
        </div>
        <span className='see-more'>More</span>
      </div>
    )
  }
}

export default ColorBox;