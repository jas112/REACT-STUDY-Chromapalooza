import sizes from '../../../resources/mediaQueryStylesHelper';

export default {
    footer: {
        width:'100%',
        height: '5vh',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#1f1f1f',
        padding: '0',
        borderSpacing: '0',
        [sizes.down('xs')]: {
            display: 'none',
        },
    },
    
    footerPaletteName: {
        color: '#daa520',
        margin: '0',
    }, 
    
    footerPaletteEmoji: {
        color: '#daa520',
        margin: '0 10px',
    },
}