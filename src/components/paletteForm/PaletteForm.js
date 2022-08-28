import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {ChromePicker} from 'react-color';
import chroma from 'chroma-js';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
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
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#161616',
    color: '#daa520', 
    '& ul': {
      backgroundColor: '#161616 !important',
    },
    '& svg': {
      color: '#daa520',
    },
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    height: '100vh',
    backgroundColor: '#0e0e0e !important',
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },

  cpToolBar: {
    backgroundColor: '#1f1f1f', 
  },

  fab: {
    margin: theme.spacing.unit,
  },

  colorPickerAssembly: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  colorPickerConsole: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    '& .colorPickerConsoleBtn': {
      width: '225px',
      maxWidth: '100%',
    },
    '& .chrome-picker': {
      background: '#00000060 !important',
    }

  },

  colorPickerSubConsole: {
    width: '225px',
    maxWidth: '100%',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '5px auto',
    '& button': {
      width: '110px',
      maxWidth: '100%',
      borderRadius: '0',
      fontSize: '.5rem',
    }
  },

  colorPickerConsoleBtn: {
    width: '225px',
    maxWidth: '100%',
    height: '60px',
    borderRadius: '0',
    margin: '15px auto',
    fontSize: '1.5rem',
    '& svg':{
      color: '#000000', 
    }
  }

});

class PaletteForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      currentColor: 'lime',
      colors: ['#ffffff']
    }
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.updateColorState = this.updateColorState.bind(this);
    this.addColor = this.addColor.bind(this);
  }

  handleDrawerOpen() {
    this.setState({ open: true });
  }

  handleDrawerClose() {
    this.setState({ open: false });
  }

  updateColorState(colorValue){
    console.log(colorValue);
    this.setState({currentColor: colorValue.hex});
  }

  addColor(){
    this.setState({colors: [...this.state.colors, this.state.currentColor]},
      () => console.log(JSON.stringify(this.state.colors)));
  }

  generatePaletteColors(){
    let currentPaletteColors = this.state.colors.map(color => (
      <li key={uuidv4()} style={{backgroundColor: `${color}`, color: '#000000'}}>{color.hex}</li>
    ));
    return currentPaletteColors;
  }

  render() {
    const { classes, theme } = this.props;
    const { open, currentColor } = this.state;

    let isDarkColor = chroma(currentColor).luminance() <= .55;
    console.log(`color ${currentColor} | isDarkColor ${isDarkColor}`);
    let addBtnColor = isDarkColor ? '#ffffff' : '#000000';
    let currentPalette = this.generatePaletteColors();
    
    return (
      <div className={classes.root}>
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
              onClick={this.handleDrawerOpen}
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
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={`${classes.drawerHeader} ${classes.cpPaperRoot}`}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>

          <Divider />
          <div className={classes.colorPickerAssembly}>

            <div className={classes.colorPickerConsole}>

              <Typography varient='h4'>PALETTE DESIGN CONSOLE</Typography>

              <div className={classes.colorPickerSubConsole}>
                <Button variant="contained" size="large" color="secondary" className={classes.margin}>CLEAR PALETTE</Button>
                <Button variant="contained" size="large" color="primary" className={classes.margin}>RANDOM COLOR</Button>
              </div>

              <ChromePicker color={this.state.currentColor} onChangeComplete={(newColor) => this.updateColorState(newColor)} />

              <Button 
                variant="contained" 
                size="large" 
                color='primary' 
                className={`${classes.margin} ${classes.colorPickerConsoleBtn}`}
                style={{
                  backgroundColor: this.state.currentColor,
                  color: addBtnColor,
                }}
                onClick={this.addColor}
              >
                ADD COLOR
              </Button>

            </div>
          </div>

        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <ul>
            {currentPalette}
          </ul>
          

        </main>
      </div>
    );
  }
}

PaletteForm.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PaletteForm);