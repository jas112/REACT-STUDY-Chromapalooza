import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './NavBar.css';

class NavBar extends Component {

  generateNavBarSlider(){
    return (
      <div className='NavBar-slider-console'>
          <div className='NavBar-slider-readout'>Level: {this.props.level}</div>
          <div className='NavBar-slider-box'>
              <Slider defaultValue={this.props.level} min={100} max={900} step={100} onAfterChange={this.props.changeLevelValue}/>
          </div>
      </div>
    );
  }

  render() {

    const{ changeColorFormat, currentColorFormat, isFullPalette } = this.props;
    let navBarSlider;

    if(isFullPalette){
      const { changeLevelValue, level } = this.props;
      navBarSlider = this.generateNavBarSlider();
    }else{
      navBarSlider = null;
    }
    
    return (
      <header className='NavBar'>
        <div className='NavBar-branding-box'>
            <NavLink className='NavBar-branding' to='/'>
                chromapalooza
            </NavLink>
        </div>
        {navBarSlider}
        <div className='NavBar-select'>
            <Select onChange={changeColorFormat} defaultValue={currentColorFormat}>
                <MenuItem value='hex'>HEX - #ffffff</MenuItem>
                <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
                <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
            </Select>
        </div>
        
      </header>
    )
  }
}

export default NavBar;