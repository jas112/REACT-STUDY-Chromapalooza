import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import NavBar from '../navBar/NavBar';
import styles from './styles/PaletteFormStyles';

class PaletteForm extends Component {
  constructor(props){
    super(props);
  }
  render() {

    const {classes} = this.props;
    return (
      <div className={classes.paletteFormContainer}>
        <NavBar changeLevelValue={null} changeColorFormat={null} currentColorFormat={null} level={null} isFullPalette={null} isPaletteNavBar={false} />
        <div className={classes.paletteFormConsole}>
          <h1>Palette Form</h1>
          <form>

          </form>
        </div>
        
      </div>
    )
  }
}

export default withStyles(styles)(PaletteForm);