export default {

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
            boxShadow: '0px 0px 30px #ff5100',
            // '&:before': {
            //     content: '""',
            //     position: 'absolute',
            //     height: '23%',
            //     width: '21%',
            //     background: 'linear-gradient(90deg, crimson, blue, green)',
            //     zIndex: '-1',
            //     filter: 'blur(15px)',
            // }
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            height: '170px',
            maxHeight: '29%',
            width: '250px',
            maxWidth: '27%',
            background: 'linear-gradient(90deg, crimson, blue, green)',
            zIndex: '-1',
            filter: 'blur(15px)',
        }
    },
    
    miniPaletteLink: {
        textDecoration: 'none',
        
    },

    miniPaletteColorDisplay: {
        textDecoration: 'none',
        width: '98.4%',
        height: '170px',
        borderRadius: '5px',
        overflow: 'hidden',
        backgroundColor: 'transparent'
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
    },

    miniPaletteColorElement: {
        width:'20%',
        height: '25%',
        display: 'inline-block',
        margin: '0 auto',
        marginBottom: '-3.5px',
        overflow: 'hidden',
        '&::before': {
            content: '""',
            position: 'absolute',
            height: '27px',
            width: '45px',
            maxWidth: '3.75%',
            background: 'linear-gradient(180deg, transparent, #ffffff50,  #ffffff95)',
            zIndex: '-1',
            filter: 'blur(1px)',
        }
    }

}