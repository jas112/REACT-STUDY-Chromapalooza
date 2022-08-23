import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './ColorBox.css';

class ColorBox extends Component {
  render() {
    
    const {backgroundColor, name} = this.props;

    return (
        <CopyToClipboard text={backgroundColor}>
            <div className='ColorBox' style={{backgroundColor: backgroundColor}}>
                <div className='copy-element-container'>
                    <div className='box-content'>
                        <span>{name}</span>
                    </div>
                    <button className='copy-element-btn'>Copy</button>
                </div>
                <span className='see-more'>More</span>
            </div>
        </CopyToClipboard>
    )
  }
}

export default ColorBox;