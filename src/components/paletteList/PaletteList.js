import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MiniPalette from '../miniPalette/MiniPalette';
import './PaletteList.css';

class PaletteList extends Component {
    generatePalettes(){
        let rootPalettes = this.props.palettes; 

        let currentPalettes = rootPalettes.map(palette => (

            <MiniPalette palette={palette} key={palette.id} />
            // <NavLink style={{color: 'goldenrod'}} to={`/palette/${palette.id}`}>{palette.paletteName}</NavLink>
        ));

        return currentPalettes;
    }
  render() {
    const palettes = this.generatePalettes();
    console.log(`palettes: ${this.props.palettes}`);
    return (
        <div className='PaletteList'>
            <div className='PaletteList-console'>
                <div className='PaletteList-header'>
                    <div className='PaletteList-mainTitle-box'>
                        <div className='PaletteList-mainTitle'>
                            <NavLink to='/'>chromapalooza</NavLink>
                        </div>
                    </div>
                    <div className='PaletteList-header-console-box'>
                        <div className='PaletteList-header-operation'>
                            Create Palette
                        </div>
                    </div>
                </div>
                <div className='PaletteList-display'>
                    {palettes}
                </div>
            </div>

            
        </div>
    )
  }
}

export default PaletteList;