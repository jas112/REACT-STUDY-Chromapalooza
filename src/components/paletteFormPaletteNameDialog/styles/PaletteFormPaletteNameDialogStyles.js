const styles = theme => ({

    savePaletteDialog: {
        '& button': {
            color: '#daa520',
            backgroundColor: '#333333 !important',
            '& :hover': {
                color: '#da6e20 !important',
            },
        },

    },

    savePaletteDialogConsole: {
        backgroundColor: '#1f1f1f !important',
    },

    savePaletteDialogConsoleFooter: {
        backgroundColor: '#1f1f1f !important',
    },

    savePaletteDialogTitle:{
        color: '#daa520',
        backgroundColor: '#1f1f1f !important',
    },

    savePaletteDialogText:{
        color: '#daa520',
    },

    savePaletteDialogPaletteNameInput: {
        '& button': {
            height: '44px',
            width: '100% !important',
            borderRadius: '0',
            fontSize: '1.2rem',
            margin: '5px auto',
            color: '#daa520',
            backgroundColor: 'transparent',
            border: '2px solid #daa520',
            '&:hover': {
                color: '#333333',
                backgroundColor: '#daa520',
            }
        }
        
    },

    txtValidatorFrameRow2: {
        width: '100%',
        height: '100px',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 0px',
        border: '1px solid white',
    },
    
    savePaletteBtn:{
        color: '#daa520',
        backgroundColor: '#333333 !important',
        '& :hover': {
            color: '#da6e20 !important',
        },
    },

    emojiSelect: {
        '& MuiPaper-root': {
            background: 'transparent !important',
            backgroundColor: 'transparent !important',
        },
        '&  div': {
            backgroundColor: '#333333 !important',
        },
        '& section, button': {
            color: '#daa520',
            background: '#333333 !important',
            backgroundColor: '#333333 !important',
        },
        '& .emoji-mart-category-label': {
           '& span': {
            color: '#daa520',
            background: '#333333 !important',
            backgroundColor: '#333333 !important',
           },
        },
        '& .emoji-mart-search': {
            '& button': {
                color: '#daa520',
                background: 'transparent !important',
                backgroundColor: 'transparent !important',
            }
        },
        '& .emoji-mart-scroll': {
            width: '95%',
            marginTop: '9px',
            background: 'transparent !important',
            backgroundColor: 'transparent !important',
        }
    }

});

export default styles;