import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ColorBox from '../colorBox/ColorBox';
import NavBar from '../navBar/NavBar';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import './Palette.css';

class Palette extends Component {
  constructor(props){
    super(props);
    this.state = { level: 500 , colorFormat: 'hex', open: false};
    this.changeLevelValue = this.changeLevelValue.bind(this);
    this.changeColorFormat = this.changeColorFormat.bind(this);
    this.closeSnackBar = this.closeSnackBar.bind(this);
  }

  changeLevelValue(level){
    console.log(`newLevel: ${level}`);
    this.setState({level: level});
  }

  changeColorFormat(evt){
    console.log(`new color format: ${evt.target.value}`);
    let newColorFormat = evt.target.value;
    this.setState({colorFormat: newColorFormat},() => {
      this.setState({open: true},() => {
        setTimeout(() => {
          this.setState({open: false});
        }, 3000);
      });
    });
  }

  closeSnackBar(){
    this.setState({open: false});
  }

  getPaletteColors(level){
      const {colors} = this.props.palette;
      let currentColorPalette = colors[level].map(color => (
          <ColorBox backgroundColor={color[`${this.state.colorFormat}`]} name={color.name} colorFormat={this.state.colorFormat} key={uuidv4()} />
      ));
      return currentColorPalette;
  }
  render() {
    const {level} = this.state;
    const colorValues = this.getPaletteColors(level);

    return (
      <div className='Palette'>

        {/* <div className='Palette-slider-container'>
          <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={this.changeLevelValue}/>
        </div> */}

        <NavBar changeLevelValue={this.changeLevelValue} changeColorFormat={this.changeColorFormat} currentColorFormat={this.state.colorFormat} level={level} />
        
        <div className='Palette-colors'>
            {colorValues}
        </div>

        {/* palette footer goes here */}
        {/* <div className='Palette-footer'></div> */}
        <Snackbar 
          anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} 
          open={this.state.open}
          autoHideDuration={3000}
          message={<span id='message-id'>Format Changed To:  <span style={{textTransform: 'uppercase'}}>{this.state.colorFormat}</span></span>}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          onClose={this.closeSnackBar}
          action={[
            <IconButton onClick={this.closeSnackBar} color='inherit' key='close' aria-lable='close'>
              <CloseIcon />
            </IconButton>
          ]}
        />
      </div>
    )
  }
}

export default Palette