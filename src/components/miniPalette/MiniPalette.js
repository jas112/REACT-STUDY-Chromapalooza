import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
// import './styles/MiniPalette.css';
import styles from './styles/MiniPaletteStyles';

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

function MiniPalette(props){
    const {paletteName, id, emoji, colors, classes} = props;

    const miniPaletteColors = colors.map(color => (
        <div 
        className={classes.miniPaletteColorElement} 
        style={{backgroundColor: `${color.color}90`,}} 
        key={color.name}>
        </div>
    ));

    return (
        // <Link className='MiniPaletteLink' to={`/palette/${id}`}>
            <div className={classes.miniPaletteDisplayFrame}>
                <div className={classes.miniPalette} onClick={props.handleClick}>
                    <div className={classes.miniPaletteColorDisplay}>
                        {miniPaletteColors}
                    </div>
                    <div className={classes.miniPaletteDetails}>
                        <div className={classes.miniPaletteName}>{paletteName}</div>
                        <div className={classes.miniPaletteEmoji}>{emoji}</div>
                        {/* <h4>test of nested styles...</h4> */}
                    </div>
                    <div className={classes.delete}>
                        <DeleteIcon className={classes.deleteIcon} style={{transition: 'all .25s ease-in-out'}} title='Delete Palette'/>
                    </div>
                </div>
            </div>
        // </Link>
    );
}

export default withStyles(styles)(MiniPalette);