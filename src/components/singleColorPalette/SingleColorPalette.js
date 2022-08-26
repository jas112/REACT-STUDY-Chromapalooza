import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
          colorFormat: 'hex', 
          open: false
        };
        this.changeColorFormat = this.changeColorFormat.bind(this);
        this.closeSnackBar = this.closeSnackBar.bind(this);
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
              <ColorBox backgroundColor={color[`${this.state.colorFormat}`]} name={color.name} colorFormat={this.state.colorFormat} showMore={false} key={uuidv4()} />
          ));
          return currentColorPalette;
      }

      generateGoBackColorBox(){
        return (
          <div className='ColorBox SingleColorPaletteGoBack' key={uuidv4()}>
            <div className='goBackBtnFrame'>
              <Link to={`/palette/${this.props.palette.id}`} className='goBackBtn'>GO BACK</Link>
            </div>
          </div>
        );
      }

  render() {

    const { colorFormat, open } = this.state;

    const thisPalette = this.props.palette;

    console.log(`thisPalette: ${JSON.stringify(thisPalette)}`);

    const { paletteName, emoji } = this.props.palette;

    const colorValues = this.getPaletteColors();

    let goBackColorBox = this.generateGoBackColorBox();

    return (
        <div className='SingleColorPalette'>

        <NavBar changeColorFormat={this.changeColorFormat} currentColorFormat={colorFormat} isFullPalette={false} />
        
        <div className='SingleColorPalette-colors'>
            {colorValues}
            {goBackColorBox}
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