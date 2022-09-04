import sizes from '../../../resources/mediaQueryStylesHelper';

export default {
    navBar: {
        width: '100%',
        height: '5vh',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: '#daa520',
        backgroundColor: '#1f1f1f',
        [sizes.down('xs')]: {
            height: '10vh',
            flexFlow: 'column nowrap',
            justifyContent: 'center',
        },
    },

    navBarBrandingBox: {
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        fontSize: '25px',
        fontFamily: 'Roboto',
        margin: '0 10px',
        [sizes.down('md')]: {
            display: 'none !important',
        },
    },
    
    navBarBranding: {
        fontWeight: '800',
        textTransform: 'uppercase',
        textDecoration: 'none',
        background: 'linear-gradient(to right,#ff0000,#ffa500,#ffff00,#008000,#5c5cf3,#8047aa,#ee82ee,#30CFD0)',
        WebKitBackgroundClip: 'text',
        WebKitTextFillColor: 'transparent',
    },

    navBarSliderConsole: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        [sizes.down('xs')]: {
            justifyContent: 'center',
            width: '100%',
            padding: '15px 0',
        },
    },
    
    navBarSliderReadout: {
        display: 'inline-block',
        [sizes.down('xs')]: {
            fontSize: '.8rem',
            display: 'none',
        },
    },
    
    navBarSliderBox: {
        width:'500px',
        margin:'0 15px',
        display: 'inline-block',
        '& .rc-slider-track': {
            backgroundColor: 'transparent',
        },
        '& .rc-slider-rail': {
            backgroundColor: 'transparent',
            border: '1px solid #daa520',
            height: '8px',
        },
        '& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover': {
            backgroundColor: '#000000 !important',
            border: '2px solid #daa520 !important',
            outline: 'none !important',
            outline: 'none',
            width: '12px !important',
            height: '26px !important',
            borderRadius: '0',
            boxShadow: 'none !important',
            position:'relative',
            bottom: '4px',
        },
        [sizes.down('lg')]: {
            width: '500px !important',
        },
        [sizes.down('md')]: {
            width: '240px !important',
        },
        [sizes.down('xs')]: {
            display: 'block',
            width: '90% !important',
        },
        
    },

    navBarSelect: {
        padding: '0 10px',
        display:'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'flex-end',
        flexGrow: '1',
        '& .MuiInputBase-root': {
            color:'#ffffff',
            width:'250px !important',
            [sizes.down('xs')]: {
                width: '90% !important',
            },
        },
        '& .MuiInputBase-root, .MuiList-root': {
            backgroundColor: '#2f2f2f !important',
            border: 'none !important',
        },
        '& .MuiInputBase-root, .MuiSelect-icon': {
            paddingLeft: '10px !important',
            color:'#ffa500 !important',
        },
        '& .MuiMenuItem-root': {
            color:'#ffa500 !important',
        },

        [sizes.down('xs')]: {
            width: '100%',
            justifyContent: 'center',
            padding: '10px 10px 15px',
        },
    },
    
}