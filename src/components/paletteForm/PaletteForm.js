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
import styles from './styles/PaletteFormStyles';

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


  handleFinalPaletteSubmit(newPaletteMetaData){
    console.log(newPaletteMetaData);
    let newPalette = {
      paletteName: newPaletteMetaData.paletteName,
      id: newPaletteMetaData.paletteName.toLowerCase().replace(/ /g,'-'),
      emoji: newPaletteMetaData.paletteEmoji,
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