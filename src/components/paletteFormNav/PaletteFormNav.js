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
import MenuIcon from '@material-ui/icons/Menu';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import PaletteFormPaletteNameDialog from '../paletteFormPaletteNameDialog/PaletteFormPaletteNameDialog';

const drawerWidth = 240;

const styles = theme => ({
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
        color: '#daa520',
    },
    cpToolBar: {
        backgroundColor: '#1f1f1f', 
        width:'100% !important',
        // border: '1px solid red',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'flex-start',
    },

    txtValidatorFrameRow: {
        height: '100px',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignSelf: 'flex-end !important',
        flexGrow: '1',
    },

    txtValidatorFrameRowInner: {
        width: '100%',
        height: '100px',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignSelf: 'flex-end',
        flexGrow: '1',
        padding: '0 20px',
        // border: '1px solid white',
        // '& .MuiInputBase-root': {
        //     width: '225px !important',
        //     maxWidth: '100%',
        //     margin: '0 auto',
        //     borderRadius: '0',
        //     backgroundColor: '#333333 !important',
        // },
        // '& button': {
        //     height: '54px',
        //     width: '150px',
        //     maxWidth: '100%',
        //     borderRadius: '0',
        //     fontSize: '.9rem',
        //     margin: '0 auto',
        // }
    },
    
});

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
              {/* <ValidatorForm onSubmit={() => this.props.handleSubmit(newPaletteName)}>
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
              </ValidatorForm> */}
                <div className={classes.txtValidatorFrameRowInner}>
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