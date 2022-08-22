import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ColorBox from '../colorBox/ColorBox';
import './Palette.css';

class Palette extends Component {
    getPaletteColors(){
        let colors = this.props.colors.map(color => (
            <ColorBox backgroundColor={color.color} name={color.name} key={uuidv4()} />
        ));
        return colors;
    }
  render() {

    const colorValues = this.getPaletteColors();

    return (
      <div className='Palette'>
        {/* palette navbar goes here */}
        {/* <div className='Palette-header'></div> */}
        <div className='Palette-colors'>
            {/* color boxes go here */}
            {colorValues}
        </div>
        {/* palette footer goes here */}
        {/* <div className='Palette-footer'></div> */}
      </div>
    )
  }
}

export default Palette