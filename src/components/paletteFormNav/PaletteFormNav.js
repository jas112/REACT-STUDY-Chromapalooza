import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

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

    const {classes, open} = this.props;
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
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              <div className='NavBar-branding-box'>
                  <NavLink className='NavBar-branding' to='/'>
                      chromapalooza
                  </NavLink>
              </div>
            </Typography>
            <div className={classes.txtValidatorFrameRow}>
              <ValidatorForm onSubmit={() => this.props.handleSubmit(newPaletteName)}>
                <div className={classes.txtValidatorFrameRow2}>
                  <TextValidator
                    label='PALETTE NAME'
                    name='newPaletteName' 
                    value={newPaletteName} 
                    validators={[
                      'required',
                      'isPaletteNameUnique']}
                    errorMessages={[
                      'Enter a palette name...',
                      'Palette name not unique...try again.']}
                    onChange={this.handleChange}
                  />
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    size='small' 
                    type='submit'>
                      SAVE PALETTE
                  </Button>
                </div>
              </ValidatorForm>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default PaletteFormNav;