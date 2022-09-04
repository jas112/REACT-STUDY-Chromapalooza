import {DRAWER_WIDTH} from '../../../resources/appConstants';

const drawerWidth = DRAWER_WIDTH;

const styles = theme => ({
    hide: {
        display: 'none',
      },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
        color: '#daa520',
    },
    cpToolBar: {
        backgroundColor: '#1f1f1f', 
        width:'100% !important',
        // border: '1px solid red',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'flex-start',
    },

    txtValidatorFrameRow: {
        height: '100px',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignSelf: 'flex-end !important',
        flexGrow: '1',
    },

    txtValidatorFrameRowInner: {
        width: '100%',
        height: '100px',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignSelf: 'flex-end',
        flexGrow: '1',
        padding: '0 20px',
    },

    goBackBtn: {
        border: 'none',
        backgroundColor: '#333333',
        color: '#daa520',
        margin: '0 10px',
        height: '36.46px',
        borderRadius: '4px',
        padding: '6px 8px',
        '&:hover': {
            color: '#da6e20',
        }

    }
    
});

export default styles;