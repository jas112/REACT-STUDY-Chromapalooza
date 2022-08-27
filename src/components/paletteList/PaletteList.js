import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MiniPalette from '../miniPalette/MiniPalette';
import { withStyles } from '@material-ui/styles';
import './styles/PaletteList.css';
import styles from './styles/PaletteListStyles';

class PaletteList extends Component {
    generatePalettes(){
        let rootPalettes = this.props.palettes; 

        let currentPalettes = rootPalettes.map(palette => (

            <MiniPalette {...palette} key={palette.id} handleClick={() => this.navigateToPaletteById(palette.id)} />
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
    console.log(`palettes: ${this.props.palettes}`);
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
                <div className={classes.paletteListDisplay}>
                    {palettes}
                </div>
            </div>
        </div>
    )
  }
}

export default withStyles(styles)(PaletteList);