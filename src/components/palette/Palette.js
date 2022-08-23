import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ColorBox from '../colorBox/ColorBox';
import './Palette.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Palette extends Component {
  constructor(props){
    super(props);
    this.state = { level: 500};
    this.changeLevelValue = this.changeLevelValue.bind(this);
  }

  changeLevelValue(level){
    console.log(`newLevel: ${level}`);
    this.setState({level: level})
  }

  getPaletteColors(level){
      const {colors} = this.props.palette;
      let currentColorPalette = colors[level].map(color => (
          <ColorBox backgroundColor={color.hex} name={color.name} key={uuidv4()} />
      ));
      return currentColorPalette;
  }
  render() {
    const {level} = this.state;
    const colorValues = this.getPaletteColors(level);

    return (
      <div className='Palette'>
        {/* palette navbar goes here */}
        <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={this.changeLevelValue}/>
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