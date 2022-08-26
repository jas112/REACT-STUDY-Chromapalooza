import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MiniPalette from '../miniPalette/MiniPalette';
import { withStyles } from '@material-ui/styles';
import './PaletteList.css';

const styles = {

    paletteList: {
        width:'100%',
        height: '100%',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
    },
    
    paletteListConsole: {
        width: '50%',
        maxWidth: '100%',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    paletteListHeader: {
        width: '100%',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#ffa500',
        margin: '30px 0 0 0',
    },
    
    paletteListMainTitleBox: {
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        fontSize: '30px',
        fontFamily: 'Roboto',
        margin: '0',
        padding: '0',
    },
    
    paletteListMainTitle: {
        background: 'linear-gradient(to right,#ff0000,#ffa500,#ffff00,#008000,#5c5cf3,#8047aa,#ee82ee,#30CFD0)',
        backgroundClip: 'text',
        webkitTextFillColor: 'transparent',
        fontWeight: '800',
        textTransform: 'uppercase',
        margin: '0',
        padding: '0',
    },
    
    paletteListHeaderConsoleBox: {
    
    },
    
    paletteListHeaderOperation: {
    
    },
    
    paletteListDisplay: {
        
        // width: '100%',
        // display: 'flex',
        // flexFlow: 'row wrap',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        // flexGrow: '1',
        // padding: '20px 0 0 0',
        // margin: '10px 0 0 0',

        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '5%'

    }
}

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
            <div className='PaletteList-console'>
                <div className={classes.paletteListHeader}>
                    <div className={classes.paletteListMainTitleBox}>
                        <div className='PaletteList-mainTitle'>
                            <NavLink to='/'>chromapalooza</NavLink>
                        </div>
                    </div>
                    <div className={classes.paletteListHeaderConsoleBox}>
                        <div className={classes.paletteListHeaderOperation}>
                            Create Palette
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