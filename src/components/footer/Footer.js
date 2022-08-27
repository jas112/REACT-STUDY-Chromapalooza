import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import '../../../node_modules/twemoji-awesome/dist/twemoji-awesome.min.css';
import './styles/Footer.css';
import styles from './styles/FooterStyles';

class Footer extends Component {
  render() {
    const {paletteName, paletteEmoji, classes} = this.props;
    // console.log(`paletteName - ${paletteName} | emoji - ${paletteEmoji}`);
    return (
      <div className={classes.footer}>
        <div className={classes. footerPaletteName}>
            {paletteName}
        </div>
        <div className={classes. footerPaletteEmoji}>
            {paletteEmoji}	
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Footer);