import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const styles = theme => ({

    savePaletteDialog: {
        '& button': {
            color: '#daa520',
            backgroundColor: '#333333 !important',
            '& :hover': {
                // border: '1px solid #ffffff',
                color: '#da6e20 !important',
            },
        },
        // '& .MuiPaper-root': {
        //     backgroundColor: '#1f1f1f !important',
        // },
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

    txtValidatorFrameRow: {
        height: '100px',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignSelf: 'flex-end !important',
        flexGrow: '1',
    },

    savePaletteDialogPaletteNameInput: {
        '& .MuiInputBase-root': {
            width: '100% !important',
        },
        '& input': {
            width: '100% !important',
            margin: '0 auto',
            borderRadius: '0',
            backgroundColor: '#333333 !important',
        },
        
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
        // '& .MuiInputBase-root': {
        //     width: '553px !important',
        //     maxWidth: '100% !important',
        //     margin: '0 auto',
        //     borderRadius: '0',
        //     backgroundColor: '#333333 !important',
        // },
        // '& button': {
        //     height: '44px',
        //     // width: '150px',
        //     width: '100% !important',
        //     borderRadius: '0',
        //     fontSize: '1.2rem',
        //     margin: '5px auto',
        //     color: '#daa520',
        //     backgroundColor: 'transparent',
        //     border: '2px solid #daa520',
        //     '&:hover': {
        //         color: '#333333',
        //         backgroundColor: '#daa520',
        //     }
        // }
    },
    
});

class PaletteFormPaletteNameDialog extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            newPaletteName: '',
        }
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => 
        this.props.availablePalettes.every(
          ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase()
        )
      );
    }

    handleClickOpen() {
        this.setState({ open: true });
    };
    
    handleClose() {
        this.setState({ open: false });
    };

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

  render() {
    const {classes} = this.props;
    const {open, newPaletteName} = this.state;
    return (
        <div className={classes.savePaletteDialog}>
            <Button onClick={this.handleClickOpen}>SAVE PALETTE</Button>
                <Dialog
                    open={open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title" className={classes.savePaletteDialogTitle}>Save Palette</DialogTitle>
                    <ValidatorForm onSubmit={() => this.props.handleSubmit(newPaletteName)}>
                    <DialogContent className={classes.savePaletteDialogConsole}>
                        <DialogContentText className={classes.savePaletteDialogText}>
                            To save your new color palette, please enter a name below.
                        </DialogContentText>
                        
                            {/* <div className={classes.txtValidatorFrameRow2}> */}
                            <TextValidator
                                label='PALETTE NAME'
                                name='newPaletteName' 
                                value={newPaletteName} 
                                fullWidth
                                margin='normal'
                                validators={[
                                'required',
                                'isPaletteNameUnique']}
                                errorMessages={[
                                'Enter a palette name...',
                                'Palette name not unique...try again.']}
                                onChange={this.handleChange}
                                // className={classes.savePaletteDialogPaletteNameInput}
                            />
                            {/* <Button 
                                variant="contained" 
                                color="secondary" 
                                size='small' 
                                type='submit'>
                                SAVE PALETTE
                            </Button> */}
                            {/* </div> */}

                        {/* <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                        /> */}
                    </DialogContent>
                    <DialogActions className={classes.savePaletteDialogConsoleFooter}>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        {/* <Button onClick={this.handleClose} color="primary">
                            Subscribe
                        </Button> */}
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            size='small' 
                            type='submit'>
                            SAVE PALETTE
                        </Button>
                    </DialogActions>
                    </ValidatorForm>
                </Dialog>
        </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormPaletteNameDialog);