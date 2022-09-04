import chroma from 'chroma-js';
import sizes from '../../../resources/mediaQueryStylesHelper';

const styles = {
    colorBox: {
        width: '20%',
        height: props => props.isFullPalette ? '25%' : '50%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-3.5px',
        '&:hover button': {
            opacity: '1',
            transition: '.5s'
        },
        [sizes.down('md')]: {
            width: '25%',
            height: props => props.isFullPalette ? '20%' : '50%',
        },
        [sizes.down('md')]: {
            width: '50%',
            height: props => props.isFullPalette ? '10%' : '50%',
        },
        [sizes.down('xs')]: {
            width: '100%',
            height: props => props.isFullPalette ? '5%' : '10%',
        },

    },

    colorBoxColorName: {
        color: props => chroma(props.backgroundColor).luminance() <= .55 ? '#ffffff' : '#000000',
    },

    seeMoreBtn: {
        color: props => chroma(props.backgroundColor).luminance() >= .6 ? '#000000' : '#ffffff',
        width: '60px',
        height: '30px',
        background: '#ffffff50',
        position: 'absolute',
        right: '0px',
        bottom: '0px',
        border: 'none',
        fontWeight: '500',
        textAlign: 'center',
        lineHeight: '30px',
        textTransform: 'uppercase',
    },

    copyElementBtn: {
        color: props => chroma(props.backgroundColor).luminance() >= .6 ? '#000000' : '#ffffff',
        width: '100px',
        height: '30px',
        display: 'inline-block',
        background: '#ffffff50',
        fontSize: '1rem',
        textAlign: 'center',
        textTransform: 'uppercase',
        lineHeight: '30px',
        outline: 'none',
        border: 'none',
        position: 'absolute',
        top:'50%',
        left: '50%',
        marginTop: '-15px',
        marginLeft: '-50px',
        opacity: '0',
    },

    boxContent: {
        width: '100%',
        position: 'absolute',
        left: '0px',
        bottom: '0px',
        padding: '10px',
        fontSize: '10px',
        color:'#000000',
        letterSpacing: '1px',
        textTransform: 'uppercase',   
    },

    copyIndicatorOverlay: {
        width: '100%',
        height: '100%',
        transform: 'scale(.1)',
        opacity: '0',
        zIndex: '0',
        transition: 'transform .6s ease-in-out',
    },

    showCopyIndicatorOverlay: {
        position: 'absolute',
        transform: 'scale(50)',
        opacity: '1',
        zIndex: '100',
        transition: 'transform .6s ease-in-out',
    },

    copyIndicatorMsg: {
        position: 'fixed',
        left:'0',
        right:'0',
        top:'0',
        bottom:'0',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        color:'#ffffff',
        fontSize: '4rem',
        transform: 'scale(.1)',
        opacity: '0',
        '& h1': {
            width:'100%',
            marginBottom: '0',
            fontWeight: '400',
            textAlign: 'center',
            textShadow: '0px 0px 5px #00000090',
            textTransform: 'uppercase',
            backgroundImage: 'linear-gradient(to right,#ffffff00,#ffffff00,#ffffff30,#ffffff50,#ffffff30,#ffffff00,#ffffff00)',
            padding: '1rem',
        },
    },

    showCopyIndicatorMsg: {
        transform: 'scale(1)',
        opacity: '1',
        zIndex: '100',
        transition: 'all .4s ease-in-out',
        transitionDelay: '.3s',
    },

    copyIndicatorMsgColor: {
        color: props => chroma(props.backgroundColor).luminance() >= .6 ? '#000000' : '#ffffff',
        fontWeight: '300',
        fontSize: '2rem'
    },
}

export default styles;