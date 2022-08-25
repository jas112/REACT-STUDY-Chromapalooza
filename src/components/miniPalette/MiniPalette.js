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

    miniPaletteDisplayFrame: {
        // border: '1px solid white',
        width: '100%',
        height: '200px',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        margin: '0',
        padding:"0",
    }, 

    miniPalette: {
        width: '97.5%',
        height: '97.5%',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#daa520',
        backgroundColor: '#32323290',
        margin: '10px 0',
        borderRadius: '5px',
        boxShadow: '0px 0px 15px #ff510080',
        border: '1px solid #ff5100',
        padding:".5rem",
        overflow: 'hidden',
        '&:hover': {
            width: '100%',
            height: '100%',
            cursor:'pointer',
            backgroundColor: '#3b3b3b65',
            boxShadow: '0px 0px 20px #00000080',
            '&:before': {
                content: '""',
                position: 'absolute',
                height: '21.5%',
                width: '21%',
                background: 'linear-gradient(90deg, crimson, blue, green)',
                zIndex: '-1',
                filter: 'blur(15px)',
            }
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            height: '17%',
            width: '17%',
            background: 'linear-gradient(90deg, crimson, blue, green)',
            zIndex: '-1',
            filter: 'blur(15px)',
        }
    },
    
    miniPaletteLink: {
        textDecoration: 'none',
        
    },

    miniPaletteColorDisplay: {
        textDecoration: 'none'
    },

    miniPaletteDetails: {
        width: '100%',
        textDecoration: 'none',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    miniPaletteName: {
        fontSize: '.85rem',
        '& h4': {
            color: 'red',
            fontSize: '10px'
        }
    },
    miniPaletteEmoji: {
        fontSize:'1.2rem'
    }
}

function MiniPalette(props){
    const {paletteName, id, emoji, colors, classes} = props;
    return (
        <Link className='MiniPaletteLink' to={`/palette/${id}`}>
            <div className={classes.miniPaletteDisplayFrame}>
                <div className={classes.miniPalette}>
                    <div className={classes.miniPaletteColorDisplay}></div>
                    <div className={classes.miniPaletteDetails}>
                        <div className={classes.miniPaletteName}>{paletteName}</div>
                        <div className={classes.miniPaletteEmoji}>{emoji}</div>
                        {/* <h4>test of nested styles...</h4> */}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default withStyles(styles)(MiniPalette);