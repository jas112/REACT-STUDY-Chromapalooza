import React, { Component } from 'react';
import '../../../node_modules/twemoji-awesome/dist/twemoji-awesome.min.css';
import './Footer.css';

class Footer extends Component {
  render() {
    const {paletteName, paletteEmoji} = this.props;
    console.log(`paletteName - ${paletteName} | emoji - ${paletteEmoji}`);
    return (
      <div className='Footer'>
        <div className='Footer-paletteName'>
            {paletteName}
        </div>
        <div className='Footer-paletteEmoji'>
            {paletteEmoji}	
        </div>
      </div>
    )
  }
}

export default Footer;