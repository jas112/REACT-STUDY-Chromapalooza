import sizes from '../../../resources/mediaQueryStylesHelper';

export default {
    palette: {
        height: '100vh',
        width: '100%',
        borderSpacing: '0',
        display: 'flex',
        flexFlow: 'column nowrap',
    },
  
    paletteSliderContainer: {
        width:'340px',
        margin:'0 10px',
        display: 'inline-block',
        height: '5vh',
        border: '1px solid red',
    },
  
    paletteColors: {
        height: '90vh',
        width: '100vw',
        backgroundColor: '#000000',
        overflow: 'hidden',
        [sizes.down('xs')]: {
            height: '85vh',
            overflow: 'visible',
        },
    }
}