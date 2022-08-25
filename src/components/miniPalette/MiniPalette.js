import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './MiniPalette.css';

class MiniPalette extends Component {
  render() {
    const {palette} = this.props;
    return (
        <Link className='MiniPalette-link' to={`/palette/${palette.id}`}>
            <div className='MiniPalette'>
                <div className='MiniPalette-colors'></div>
                <div className='MiniPalette-name'>
                    {palette.paletteName}
                </div>
            </div>
        </Link>
        
    )
  }
}

export default MiniPalette;