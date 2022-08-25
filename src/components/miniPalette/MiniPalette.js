import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import './MiniPalette.css';

// class MiniPalette extends Component {
//   render() {
//     const {palette} = this.props;
//     return (
//         <Link className='MiniPalette-link' to={`/palette/${palette.id}`}>
//             <div className='MiniPalette'>
//                 <div className='MiniPalette-colors'></div>
//                 <div className='MiniPalette-name'>
//                     {palette.paletteName}
//                 </div>
//             </div>
//         </Link>
        
//     )
//   }
// }

// export default MiniPalette;

const styles = {
    miniPalette: {
        width: '200px',
        height: '200px',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#daa520',
        backgroundColor: '#323232',
        margin: '10px 0',
        borderRadius: '3px',
        boxShadow: '0px 0px 15px #00000080',
    },
    
    miniPaletteLink: {
        textDecoration: 'none'
    },

    miniPaletteName: {
        '& h4': {
            color: 'red',
            fontSize: '10px'
        }
    }
}

function MiniPalette(props){
    const {palette, classes} = props;
    return (
        <Link className='MiniPaletteLink' to={`/palette/${palette.id}`}>
            <div className={classes.miniPalette}>
                <div className='MiniPaletteColors'></div>
                <div className={classes.miniPaletteName}>
                    {palette.paletteName}
                    <h4>test of nested styles...</h4>
                </div>
            </div>
        </Link>
    );
}

export default withStyles(styles)(MiniPalette);