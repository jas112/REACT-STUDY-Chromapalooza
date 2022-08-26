import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ColorBox from '../colorBox/ColorBox';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import './SingleColorPalette.css';

class SingleColorPalette extends Component {
    constructor(props){
        super(props);
        this.state = { 
          level: 500 , 
          colorFormat: 'hex', 
          open: false
        };
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
    
      getPaletteColors(){
    
          const { colors } = this.props.palette;
    
          let currentColorPalette = colors.map(color => (
              <ColorBox backgroundColor={color[`${this.state.colorFormat}`]} name={color.name} colorFormat={this.state.colorFormat} key={uuidv4()} />
          ));
          return currentColorPalette;
      }

  render() {

    const { level, colorFormat, open } = this.state;

    const thisPalette = this.props.palette;

    console.log(`thisPalette: ${JSON.stringify(thisPalette)}`);

    const { paletteName, emoji } = this.props.palette;

    const colorValues = this.getPaletteColors(level);

    return (
        <div className='SingleColorPalette'>

        <NavBar changeLevelValue={this.changeLevelValue} changeColorFormat={this.changeColorFormat} currentColorFormat={colorFormat} level={level} />
        
        <div className='SingleColorPalette-colors'>
            {colorValues}
        </div>

        <Footer paletteName={paletteName} paletteEmoji={emoji} />

        <Snackbar 
          anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} 
          open={open}
          autoHideDuration={3000}
          message={<span id='message-id'>Format Changed To:  <span style={{textTransform: 'uppercase'}}>{colorFormat}</span></span>}
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

export default SingleColorPalette;