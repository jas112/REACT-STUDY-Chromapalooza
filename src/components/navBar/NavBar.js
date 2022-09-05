import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { NavLink } from 'react-router-dom';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './styles/NavBar.css';
import styles from './styles/NavBarStyles';

class NavBar extends Component {

  generateNavBarSlider(){
    return (
      <div className={this.props.classes.navBarSliderConsole}>
          <div className={this.props.classes.navBarSliderReadout}>Lvl: {this.props.level}</div>
          <div className={this.props.classes.navBarSliderBox}>
              <Slider defaultValue={this.props.level} min={100} max={900} step={100} onAfterChange={this.props.changeLevelValue}/>
          </div>
      </div>
    );
  }

  generateNavBarSelect(){
    return (
      <div className={this.props.classes.navBarSelect}>
        <Select onChange={this.props.changeColorFormat} defaultValue={this.props.currentColorFormat} className={this.props.classes.navBarSelectEle}>
            <MenuItem value='hex'>HEX - #ffffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
        </Select>
      </div>
    );
  }

  render() {

    const{ changeColorFormat, currentColorFormat, isFullPalette, isPaletteNavBar, classes } = this.props;
    let navBarSlider;
    let navBarSelect;

    if (isPaletteNavBar) {

      navBarSelect = this.generateNavBarSelect();

      if(isFullPalette){
        const { changeLevelValue, level } = this.props;
        navBarSlider = this.generateNavBarSlider();
      }else{
        navBarSlider = null;
      }

    } else {

      navBarSelect = null;
      
    }
    
    return (
      <header className={this.props.classes.navBar}>
        <div className={this.props.classes.navBarBrandingBox}>
            <NavLink className='NavBar-branding' to='/'>
                chromapalooza
            </NavLink>
        </div>
        {/* <div className={this.props.classes.navBarBrandingBox}>
          <NavLink className={this.props.classes.navBarBranding} to='/'>
              chromapalooza
          </NavLink>
        </div> */}

        {navBarSlider}

        {/* <div className={this.props.classes.navBarSelect}>
            <Select onChange={changeColorFormat} defaultValue={currentColorFormat}>
                <MenuItem value='hex'>HEX - #ffffff</MenuItem>
                <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
                <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
            </Select>
        </div> */}

        {navBarSelect}
        
      </header>
    )
  }
}

export default withStyles(styles)(NavBar);