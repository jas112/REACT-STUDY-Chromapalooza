import sizes from '../../../resources/mediaQueryStylesHelper';

const styles = {
    '@global': {
        '.fade-exit': {
            opacity: '1',
        },
        '.fade-exit-active': {
            opacity: '0',
            transition: 'opacity 500ms ease-out',
        },
    },
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
        [sizes.down('md')]: {
            width: '70% !important',
        },
        [sizes.down('xs')]: {
            width: '70% !important',
        },
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
        [sizes.down('xs')]: {
            fontSize: '.8rem',
        },
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
    
    paletteListDisplay: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '2rem',
        paddingBottom: '200px !important',
        // margin: '0 auto',
        [sizes.down('sm')]: {
            gridTemplateColumns: 'repeat(2, 50%)',
        },
        [sizes.down('xs')]: {
            gridTemplateColumns: 'repeat(1, 100%)',
        },
    }
}

export default styles;