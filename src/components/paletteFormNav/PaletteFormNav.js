import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import PaletteFormPaletteNameDialog from '../paletteFormPaletteNameDialog/PaletteFormPaletteNameDialog';
import styles from './styles/PaletteFormNavStyles';

class PaletteFormNav extends Component {
    constructor(props){
        super(props);
        this.state = {
            newPaletteName: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => 
        this.props.availablePalettes.every(
          ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase()
        )
      );
    }

    handleChange(evt){
    
        this.setState({
          [evt.target.name]: evt.target.value
        });
    }

  render() {

    const {classes, open, availablePalettes, handleSubmit} = this.props;
    const {newPaletteName} = this.state;

    return (
      <div>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar className={classes.cpToolBar} disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.props.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <ChevronRightIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              <div className='NavBar-branding-box'>
                  <NavLink className='NavBar-branding' to='/'>
                      chromapalooza
                  </NavLink>
              </div>
            </Typography>
            <div className={classes.txtValidatorFrameRow}>
                <div className={classes.txtValidatorFrameRowInner}>
                    <NavLink to='/'>
                        <button className={classes.goBackBtn}>&#9664; GO BACK</button>
                    </NavLink>
                    <PaletteFormPaletteNameDialog availablePalettes={availablePalettes} handleSubmit={handleSubmit} />
                </div>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);