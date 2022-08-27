import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import ColorBox from '../colorBox/ColorBox';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/styles';
import './SingleColorPalette.css';

const styles = {
  singleColorPalette: {
    height: '100vh',
    width: '100vw',
    borderSpacing: '0',
    display: 'flex',
    flexFlow: 'column nowrap',
  },

  singleColorPaletteColors: {
    height: '90vh',
    width: '100vw',
    backgroundColor: '#000000',
    overflow: 'hidden',
  },

  singleColorPaletteSliderContainer: {
    width: '340px',
    margin: '0 10px',
    display: 'inline-block',
    height: '5vh',
  },

  colorBoxSCP: {
    width: '20%',
    height: '50%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    '&:hover button': {
        opacity: '1',
        transition: '.5s'
    },
  },

  singleColorPaletteGoBack: {
    backgroundColor: '#00000070',
    '&:hover': {
      boxShadow: '0px 0px 10px #ffffff',
      transition: '.5s',
      '& a': {
        opacity: '1',
        boxShadow: '0px 0px 10px #ffffff',
        textShadow: '0px 0px 10px #ffffff',
        transition: '.5s',
      }
    },
  },

  goBackBtnFrame: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent:'center',
    alignItems: 'center',
  },

  goBackBtn: {
    textDecoration: 'none',
    width: '100px',
    height: '30px',
    display: 'inline-block',
    background: 'transparent',
    fontSize: '1rem',
    textAlign: 'center',
    textTransform: 'uppercase',
    lineHeight: '30px',
    outline: 'none',
    border: '1px solid #ffffff',
    position: 'absolute',
    top:'50%',
    left: '50%',
    marginTop: '-15px',
    marginLeft: '-50px',
    opacity: '.3',
    '&:visited': {
      color: '#ffffff',
    }
  } ,

}

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
              <ColorBox backgroundColor={color[`${this.state.colorFormat}`]} name={color.name} colorFormat={this.state.colorFormat} showMore={false} isFullPalette={false} key={uuidv4()} />
          ));
          return currentColorPalette;
      }

      generateGoBackColorBox(){
        return (
          <div className={`${this.props.classes.colorBoxSCP} ${this.props.classes.singleColorPaletteGoBack}`} key={uuidv4()}>
            <div className={this.props.classes.goBackBtnFrame}>
              <Link to={`/palette/${this.props.palette.id}`} className={this.props.classes.goBackBtn}>GO BACK</Link>
            </div>
          </div>
        );
      }

  render() {
    const { classes } = this.props;
    const { colorFormat, open } = this.state;

    const thisPalette = this.props.palette;

    // console.log(`thisPalette: ${JSON.stringify(thisPalette)}`);

    const { paletteName, emoji } = this.props.palette;

    const colorValues = this.getPaletteColors();

    let goBackColorBox = this.generateGoBackColorBox();

    return (
      <div className={classes.singleColorPalette}>

        <NavBar changeColorFormat={this.changeColorFormat} currentColorFormat={colorFormat} isFullPalette={false} />
        
        <div className={classes.singleColorPaletteColors}>
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

export default withStyles(styles)(SingleColorPalette);