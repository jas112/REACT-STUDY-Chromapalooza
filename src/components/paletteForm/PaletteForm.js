import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import PaletteFormNav from '../paletteFormNav/PaletteFormNav';
import PaletteFormColorPicker from '../paletteFormColorPicker/PaletteFormColorPicker';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import chroma from 'chroma-js';
import ColorElement from '../colorElement/ColorElement';
import DraggableColorList from '../draggableColorList/DraggableColorList';
import {arrayMove} from 'react-sortable-hoc';
import { arrayMoveImmutable, arrayMoveMutable } from 'array-move';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
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
    height: '100px',
    minHeight: '100px !important'
  },
  content: {
    height: 'calc(100vh - 64px) !important',
    backgroundColor: '#0e0e0e !important',
    borderSpacing: '0 !important',
    flexGrow: 1,
    padding: theme.spacing(3),
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
    // '& .colorPickerConsoleBtn': {
    //     width: '225px',
    //     maxWidth: '100%',
    //     margin: '0 auto',
    // },
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

cpToolBar: {
  backgroundColor: '#1f1f1f', 
  width:'100% !important',
  // border: '1px solid red',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'flex-start',
},

colorPickerSubConsole: {
    width: '225px',
    maxWidth: '100%',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'flex-end',
    margin: '5px auto',
    '& button': {
        width: '110px',
        maxWidth: '100%',
        borderRadius: '0',
        fontSize: '.5rem',
        margin: '0 auto',
    }
},

  contentTopSpacer: {
    width: '100%',
    height: '0%',
    // border: '1px solid green',
  },
  
  verticalSpacer5: {
    width: '100%',
    height: '5px',
    backgroundColor: 'transparent',
  },

  verticalSpacer10: {
    width: '100%',
    height: '10px',
    backgroundColor: 'transparent',
  },

  verticalSpacer20: {
    width: '100%',
    height: '20px',
    backgroundColor: 'transparent',
  },

});

class PaletteForm extends React.Component {
  static defaultProps = {
    maxColorCount: 20,
  }
  constructor(props){
    super(props);
    this.state = {
      open: false,
      hasMaxColorCount: this.props.availablePalettes[0].colors.length >= this.props.maxColorCount,
      colors: [...this.props.availablePalettes[0].colors]
    }
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.addColor = this.addColor.bind(this);
    this.addRandomColor = this.addRandomColor.bind(this);
    this.removeColor = this.removeColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFinalPaletteSubmit = this.handleFinalPaletteSubmit.bind(this);
    this.clearPalette = this.clearPalette.bind(this);
  }

  handleDrawerOpen() {
    this.setState({ open: true });
  }

  handleDrawerClose() {
    this.setState({ open: false });
  }

  addColor(newColor){

    console.log(`@PaletteForm add newColor: ${JSON.stringify(newColor)}`);

    // console.log(`newColor: ${this.state.currentColor} | newColorName: ${this.state.newColorName}`);

    let isMaxCountReached = this.state.hasMaxColorCount;

    if(!isMaxCountReached){

      let newColors = [...this.state.colors, newColor];
      let newBoolValue = newColors.length >= this.props.maxColorCount;
      
      this.setState({colors: newColors, hasMaxColorCount: newBoolValue});

    }else{
      alert(`MAX COLOR COUNT REACHED...`);
    }
    
  }

  addRandomColor(){

    let isNotMaxCountReached = this.state.hasMaxColorCount;

    if(!isNotMaxCountReached){

      const availableColors = this.props.availablePalettes.map(p => p.colors).flat();
      
      let randomIdx = Math.floor(Math.random()*availableColors.length);
      let randomColor = availableColors[randomIdx];
      let randomColorName = randomColor.name;
      let ColorIsAbsent = this.state.colors.every(({name}) => name.toLowerCase() !== randomColorName.toLowerCase());

      console.log(`Initial Pick = randomColorName: ${randomColor.name} | ColorIsAbsent: ${ColorIsAbsent}`);

      while (!ColorIsAbsent) {
        randomIdx = Math.floor(Math.random()*availableColors.length);
        randomColor = availableColors[randomIdx];
        randomColorName = randomColor.name;
        ColorIsAbsent = this.state.colors.every(({name}) => name.toLowerCase() !== randomColorName.toLowerCase());
      }

      console.log(`Final Pick = randomColorName: ${randomColor.name}`);

      let newColors = [...this.state.colors, randomColor];
      let newBoolValue = newColors.length >= this.props.maxColorCount;
      
      this.setState({colors: newColors, hasMaxColorCount: newBoolValue});

    }else{
      alert(`MAX COLOR COUNT REACHED...`);
    }

  }

  removeColor(colorName){
    let newPaletteColors = this.state.colors.filter(color => color.name !== colorName);
    let newBoolValue = newPaletteColors.length >= this.props.maxColorCount;
    this.setState({colors:  newPaletteColors, hasMaxColorCount: newBoolValue});
  }


  handleFinalPaletteSubmit(paletteName){

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
    this.setState({colors: [], newColorName: 'black', hasMaxColorCount: false});
  }

  handleChange(evt){
    
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({colors}) =>({
      // colors: arrayMove(colors, oldIndex, newIndex),
      // colors: arrayMoveMutable (colors, oldIndex, newIndex),
      colors: arrayMoveImmutable(colors, oldIndex, newIndex),
    }));
  }

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
    const { classes, theme, availablePalettes, routeProps, ...other } = this.props;
    const { open, hasMaxColorCount, colors } = this.state;
    
    return (
      <div className={classes.root}>
        <PaletteFormNav 
          {...routeProps} 
          // classes={classes} 
          open={open} 
          availablePalettes={availablePalettes} 
          handleSubmit={this.handleFinalPaletteSubmit} 
          handleDrawerOpen={this.handleDrawerOpen}
          {...other}
        />
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

            <div className={classes.verticalSpacer10}></div>

              <Typography varient='h4'>PALETTE DESIGN CONSOLE</Typography>

              <div className={classes.verticalSpacer10}></div>

              <div className={classes.colorPickerSubConsole}>
                <Button variant="contained" size="large" color="secondary" className={classes.margin} onClick={this.clearPalette}>CLEAR PALETTE</Button>
                <Button variant="contained" size="large" color="primary" className={classes.margin} onClick={this.addRandomColor} disabled={this.state.hasMaxColorCount}>RANDOM COLOR</Button>
              </div>

              <div className={classes.verticalSpacer20}></div>

              <PaletteFormColorPicker 
                // classes={classes}
                colors={colors}
                hasMaxColorCount={hasMaxColorCount}
                addColor={this.addColor}
                {...other}
              />

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
              distance={3} 
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