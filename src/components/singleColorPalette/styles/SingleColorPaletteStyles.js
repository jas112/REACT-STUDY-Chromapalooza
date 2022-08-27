export default {
    singleColorPalette: {
        height: '100vh',
        width: '100vw',
        borderSpacing: '0',
        display: 'flex',
        flexFlow: 'column nowrap',
      },
    
      singleColorPaletteColors: {
        height: '90vh',
        width: '100vw',
        backgroundColor: '#000000',
        overflow: 'hidden',
      },
    
      singleColorPaletteSliderContainer: {
        width: '340px',
        margin: '0 10px',
        display: 'inline-block',
        height: '5vh',
      },
    
      colorBoxSCP: {
        width: '20%',
        height: '50%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-3.5px',
        '&:hover button': {
            opacity: '1',
            transition: '.5s'
        },
      },
    
      singleColorPaletteGoBack: {
        backgroundColor: '#00000070',
        '&:hover': {
          boxShadow: '0px 0px 10px #ffffff',
          transition: '.5s',
          '& a': {
            opacity: '1',
            boxShadow: '0px 0px 10px #ffffff',
            textShadow: '0px 0px 10px #ffffff',
            transition: '.5s',
          }
        },
      },
    
      goBackBtnFrame: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent:'center',
        alignItems: 'center',
      },
    
      goBackBtn: {
        textDecoration: 'none',
        width: '100px',
        height: '30px',
        display: 'inline-block',
        background: 'transparent',
        fontSize: '1rem',
        textAlign: 'center',
        textTransform: 'uppercase',
        lineHeight: '30px',
        outline: 'none',
        border: '1px solid #ffffff',
        position: 'absolute',
        top:'50%',
        left: '50%',
        marginTop: '-15px',
        marginLeft: '-50px',
        opacity: '.3',
        '&:visited': {
          color: '#ffffff',
        }
      } ,
    
}