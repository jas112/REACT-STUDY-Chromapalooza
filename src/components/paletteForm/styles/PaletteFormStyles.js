import {DRAWER_WIDTH} from '../../../resources/appConstants';

const drawerWidth = DRAWER_WIDTH;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#161616',
    color: '#daa520', 
    '& ul': {
      backgroundColor: '#161616 !important',
    },
    '& svg': {
      color: '#daa520',
    },
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    width: '100%',
    height: '100px',
    minHeight: '100px !important'
  },
  content: {
    height: 'calc(100vh - 64px) !important',
    backgroundColor: '#0e0e0e !important',
    borderSpacing: '0 !important',
    flexGrow: 1,
    padding: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },

  colorPickerAssembly: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // border: '1px solid red'
  },

colorPickerConsole: {
    width: '100%',
    // height: '70%',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    '& .chrome-picker': {
        background: '#00000060 !important',
    },
    '& form': {
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        '& .MuiInputBase-root': {
        width: '225px !important',
        maxWidth: '100%',
        margin: '0 auto',
        borderRadius: '0',
        backgroundColor: '#333333 !important',
        }
    },
},

cpToolBar: {
  backgroundColor: '#1f1f1f', 
  width:'100% !important',
  // border: '1px solid red',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'flex-start',
},

colorPickerSubConsole: {
    width: '225px',
    maxWidth: '100%',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'flex-end',
    margin: '5px auto',
    '& button': {
        width: '110px',
        maxWidth: '100%',
        borderRadius: '0',
        fontSize: '.5rem',
        margin: '0 auto',
    }
},

  contentTopSpacer: {
    width: '100%',
    height: '0%',
    // border: '1px solid green',
  },
  
  verticalSpacer5: {
    width: '100%',
    height: '5px',
    backgroundColor: 'transparent',
  },

  verticalSpacer10: {
    width: '100%',
    height: '10px',
    backgroundColor: 'transparent',
  },

  verticalSpacer20: {
    width: '100%',
    height: '20px',
    backgroundColor: 'transparent',
  },

});

export default styles;