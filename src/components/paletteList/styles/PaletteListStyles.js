export default {
    paletteList: {
        width:'100%',
        height: '100%',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
    },
    
    paletteListConsole: {
        width: '50%',
        maxWidth: '100%',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    paletteListHeader: {
        width: '100%',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#ffa500',
        margin: '30px 0 0 0',
    },

    paletteListHeaderOperationLink: {
        textDecoration: 'none',
        color: '#ffa500',
    },
    
    paletteListMainTitleBox: {
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        fontSize: '30px',
        fontFamily: 'Roboto',
        margin: '0',
        padding: '0',
    },
    
    // paletteListMainTitle: {
    //     background: 'linear-gradient(to right,#ff0000,#ffa500,#ffff00,#008000,#5c5cf3,#8047aa,#ee82ee,#30CFD0)',
    //     backgroundClip: 'text',
    //     webkitTextFillColor: 'transparent',
    //     fontWeight: '800',
    //     textTransform: 'uppercase',
    //     margin: '0',
    //     padding: '0',
    // },
    
    paletteListDisplay: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '5%'
    }
}