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
// import AddIcon from '@material-ui/icons/Add';
// import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
// import NavigationIcon from '@material-ui/icons/Navigation';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import {ChromePicker} from 'react-color';
import chroma from 'chroma-js';
import ColorElement from '../colorElement/ColorElement';
import DraggableColorList from '../draggableColorList/DraggableColorList';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
// import { startTransition } from 'react';
import {arrayMove} from 'react-sortable-hoc';
import { arrayMoveImmutable, arrayMoveMutable } from 'array-move';

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
    height: 'calc(100vh - 64px) !important',
    backgroundColor: '#0e0e0e !important',
    borderSpacing: '0 !important',
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
    width:'100% !important',
    // border: '1px solid red',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
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
    // border: '1px solid red'
  },

  colorPickerConsole: {
    width: '100%',
    // height: '70%',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    // border: '1px solid green',
    '& .colorPickerConsoleBtn': {
      width: '225px',
      maxWidth: '100%',
      margin: '0 auto',
    },
    '& .chrome-picker': {
      background: '#00000060 !important',
    },
    '& form': {
      display: 'flex',
      flexFlow: 'column nowrap',
      justifyContent: 'space-around',
      alignItems: 'center',
      '& .MuiInputBase-root': {
        width: '225px !important',
        maxWidth: '100%',
        margin: '0 auto',
        borderRadius: '0',
        backgroundColor: '#333333 !important',
      }
    },
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
      margin: '0 auto',
    }
  },

  colorPickerConsoleBtn: {
    width: '225px',
    maxWidth: '100%',
    height: '60px',
    borderRadius: '0',
    margin: '0 auto',
    fontSize: '1.5rem',
    '& svg':{
      color: '#000000', 
    }
  },

  txtValidatorFrame: {
    width: '100%',
    height: '100px',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-around',
    alignItems: 'center',
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

  txtValidatorFrameRow2: {
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
    '& .MuiInputBase-root': {
      width: '225px !important',
      maxWidth: '100%',
      margin: '0 auto',
      borderRadius: '0',
      backgroundColor: '#333333 !important',
    },
    '& button': {
      height: '54px',
      width: '150px',
      maxWidth: '100%',
      borderRadius: '0',
      fontSize: '.9rem',
      margin: '0 auto',
    }
  },

  contentTopSpacer: {
    width: '100%',
    height: '2%',
    // border: '1px solid green',
  }

});

class PaletteForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      currentColor: 'black',
      newColorName: '',
      newPaletteName: '',
      colors: []
    }
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.updateColorState = this.updateColorState.bind(this);
    this.addColor = this.addColor.bind(this);
    this.removeColor = this.removeColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFinalPaletteSubmit = this.handleFinalPaletteSubmit.bind(this);
    this.clearPalette = this.clearPalette.bind(this);
  }
  
  componentDidMount(){

    ValidatorForm.addValidationRule('isColorNameUnique', (value) => 
      this.state.colors.every(
        ({name}) => name.toLowerCase() !== value.toLowerCase()
      )
    );

    ValidatorForm.addValidationRule('isColorUnique', (value) => 
      this.state.colors.every(
        ({color}) => color !== this.state.currentColor
      )
    );

    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => 
      this.props.availablePalettes.every(
        ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );

  }

  handleDrawerOpen() {
    this.setState({ open: true });
  }

  handleDrawerClose() {
    this.setState({ open: false });
  }

  updateColorState(colorValue){
    // console.log(colorValue);
    this.setState({currentColor: colorValue.hex});
  }

  addColor(){

    // console.log(`newColor: ${this.state.currentColor} | newColorName: ${this.state.newColorName}`);
    
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    };

    this.setState({ colors: [...this.state.colors, newColor], newColorName: '' });
  }

  removeColor(colorName){
    let newPaletteColors = this.state.colors.filter(color => color.name !== colorName);
    this.setState({colors:  newPaletteColors});
  }


  handleFinalPaletteSubmit(){

    let paletteName = this.state.newPaletteName;
    // let newPaletteName = 'Test Palette';

    let newPalette = {
      paletteName: paletteName,
      id: paletteName.toLowerCase().replace(/ /g,'-'),
      emoji: '',
      colors: this.state.colors
    };
    this.props.savePalette(newPalette);
    this.props.history.push('/');
  }

  clearPalette(){
    this.setState({colors: [], newColorName: 'black'});
  }

  handleChange(evt){
    
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({colors}) =>({
      colors: arrayMove(colors, oldIndex, newIndex),
      // colors: arrayMoveMutable (colors, oldIndex, newIndex),
    }));
  }

  // onSortEnd(oldIndex, newIndex){
  //   let paletteColors = [...this.state.colors];
  //   let modifiedPaletteColors = arrayMoveMutable (paletteColors, oldIndex, newIndex);
  //   this.setState({colors: modifiedPaletteColors});
  // }

  // onSortEnd = ({oldIndex, newIndex}) => {
  //   let paletteColors = [...this.state.colors];
  //   let modifiedPaletteColors = arrayMoveImmutable(paletteColors, oldIndex, newIndex);
  //   this.setState({colors: modifiedPaletteColors});
  // }

  generatePaletteColors(){
    let currentPaletteColors = this.state.colors.map((color) => {
      let colorIsDark = chroma(color.color).luminance() <= .6;
      let textColor = colorIsDark ? '#ffffff' : '#000000';
      // console.log(`colorIsDark: ${colorIsDark} | textColor: ${textColor}`);
      return(<ColorElement 
        key={uuidv4()} 
        color={color.color} 
        colorName={color.name} 
        // colorId={color.id}
        contentColor ={textColor} 
        style={{fontSize: '14px'}} 
        handleClick={() => this.removeColor(color.name)}
      />);
    });
    return currentPaletteColors;
  }

  render() {
    const { classes, theme } = this.props;
    const { open, currentColor } = this.state;

    let isDarkColor = chroma(currentColor).luminance() <= .55;
    // console.log(`color ${currentColor} | isDarkColor ${isDarkColor}`);
    let addBtnColor = isDarkColor ? '#ffffff' : '#000000';
    // let currentPalette = this.generatePaletteColors();
    
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
            <div className={classes.txtValidatorFrameRow}>
              <ValidatorForm onSubmit={this.handleFinalPaletteSubmit}>
                <div className={classes.txtValidatorFrameRow2}>
                  <TextValidator
                    label='PALETTE NAME'
                    name='newPaletteName' 
                    value={this.state.newPaletteName} 
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
                <Button variant="contained" size="large" color="secondary" className={classes.margin} onClick={this.clearPalette}>CLEAR PALETTE</Button>
                <Button variant="contained" size="large" color="primary" className={classes.margin}>RANDOM COLOR</Button>
              </div>

              <ChromePicker color={this.state.currentColor} onChangeComplete={(newColor) => this.updateColorState(newColor)} />
              
              <ValidatorForm onSubmit={this.addColor}>
                <div className={classes.txtValidatorFrame}>
                  <TextValidator
                    label='COLOR NAME'
                    name='newColorName' 
                    value={this.state.newColorName} 
                    onChange={this.handleChange} 
                    validators={[
                      'required',
                      'isColorNameUnique',
                      'isColorUnique']}
                    errorMessages={[
                      'Enter a color name...',
                      'Color name not unique...try again.', 
                      'Color value not unique...try again.']}
                  /> 
                </div>
 
                <Button 
                  variant="contained" 
                  size="large" 
                  color='primary'
                  type='submit' 
                  className={`${classes.margin} ${classes.colorPickerConsoleBtn}`}
                  style={{
                    backgroundColor: this.state.currentColor,
                    color: addBtnColor,
                  }}
                >
                ADD COLOR
              </Button>
              </ValidatorForm>

            </div>
          </div>

        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <div className={classes.contentTopSpacer}></div>
            
            {/* {currentPalette} */}

            <DraggableColorList 
              colors={this.state.colors} 
              removeColor={this.removeColor}
              distance={1} 
              axis='xy'
              onSortEnd={this.onSortEnd}
            />
          
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