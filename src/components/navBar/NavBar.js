import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './NavBar.css';

class NavBar extends Component {
  render() {

    const { changeLevelValue, level } = this.props;

    return (
      <header className='NavBar'>
        <div className='NavBar-branding-box'>
            <div className='NavBar-branding'>
                chromapalooza
            </div>
        </div>
        <div className='NavBar-slider-console'>
            <div className='NavBar-slider-readout'>Level: {level}</div>
            <div className='NavBar-slider-box'>
                <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevelValue}/>
            </div>
        </div>

        
      </header>
    )
  }
}

export default NavBar;