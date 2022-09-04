import sizes from '../../../resources/mediaQueryStylesHelper';

const styles = {

    colorElementOuterFrame: {
        width: '20%',
        height: '24%',
        border: '0px solid transparent',
        postion: 'relative',
        margin: '0',
        marginBottom: '-5.8px',
        overflow: 'hidden',
        borderSpacing: '0',
        fontSize: '14px',
        display: 'inline-block',
        cursor: 'pointer',
        '&:hover': {
            border: '2px solid goldenrod',
        },
        // [sizes.down('md')]: {
        //     width: '25%',
        //     height: props => props.isFullPalette ? '20%' : '33.3333%',
        // },
        // [sizes.down('md')]: {
        //     width: '50%',
        //     height: props => props.isFullPalette ? '10%' : '20%',
        // },
        // [sizes.down('xs')]: {
        //     width: '100%',
        //     height: props => props.isFullPalette ? '5%' : '10%',
        // },
        [sizes.down('lg')]: {
            width: '25%',
            height: '20%',
          },
          [sizes.down('md')]: {
              width: '50%',
              height: '10%',
          },
          [sizes.down('xs')]: {
              width: '100%',
              height: '5%',
          },
    },

    colorElementInnerFrame: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all .3s ease-in-out',
        '&:hover': {
            '& section': {
                width: '93%',
                height: '91%',
                transition: '.25s ease-in-out',
            },
        }
    },

    colorElement: {
        // width: '20%',
        // height: '25%',
        width: '100%',
        height: '100%',
        fontSize: '14px',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    colorElementDetails: {
        width: '100%',
        height: '25px',
        fontSize: 'inherit',
        color: 'inherit',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px',
    },

    colorElementName: {
        fontSize: 'inherit',
        color: 'inherit',
    },

    colorElementOperation: {
        color: 'inherit',
        '& svg': {
            fontSize: '18px !important',
            opacity: '1',
            transition: 'all .3s ease-in-out',
            '&:hover': {
                color: 'black',
                transform: 'scale(1.5)',
            }

        }
    },
    
}

export default styles;