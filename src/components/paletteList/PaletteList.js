import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MiniPalette from '../miniPalette/MiniPalette';
import { withStyles } from '@material-ui/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './styles/PaletteList.css';
import styles from './styles/PaletteListStyles';

class PaletteList extends Component {
    generatePalettes(){
        let rootPalettes = this.props.palettes; 

        let currentPalettes = rootPalettes.map(palette => (
            <CSSTransition key={palette.id} classNames='fade' timeout={500}>
                <MiniPalette 
                    {...palette} 
                    key={palette.id} 
                    handleClick={() => this.navigateToPaletteById(palette.id)}
                    id={palette.id}
                    deletePalette={this.props.deletePalette} 
                />
            </CSSTransition>
            // <NavLink style={{color: 'goldenrod'}} to={`/palette/${palette.id}`}>{palette.paletteName}</NavLink>
        ));

        return currentPalettes;
    }

    navigateToPaletteById(id){
        this.props.history.push(`/palette/${id}`);
    }
  render() {
    const {classes} = this.props;
    const palettes = this.generatePalettes();
    // console.log(`palettes: ${this.props.palettes}`);
    return (
        <div className={classes.paletteList}>
            <div className={classes.paletteListConsole}>
                <div className={classes.paletteListHeader}>
                    <div className={classes.paletteListMainTitleBox}>
                        <div className='PaletteList-mainTitle'>
                            <NavLink to='/'>chromapalooza</NavLink>
                        </div>
                    </div>
                    <div className={classes.paletteListHeaderConsoleBox}>
                        <div className={classes.paletteListHeaderOperation}>
                            <NavLink className={classes.paletteListHeaderOperationLink} to='/palette/new'>Create Palette</NavLink>
                        </div>
                    </div>
                </div>
                    <TransitionGroup className={classes.paletteListDisplay}>

                        {palettes}

                    </TransitionGroup>
            </div>
        </div>
    )
  }
}

export default withStyles(styles)(PaletteList);