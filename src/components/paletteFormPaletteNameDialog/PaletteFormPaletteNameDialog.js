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
import {Picker} from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
import styles from './styles/PaletteFormPaletteNameDialogStyles';

class PaletteFormPaletteNameDialog extends Component {
    constructor(props){
        super(props);
        this.state = {
            paletteSaveStage: 'none',
            open: false,
            newPaletteName: '',
        }
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.togglePaletteSaveStage = this.togglePaletteSaveStage.bind(this);
        this.submitPaletteMetaData = this.submitPaletteMetaData.bind(this);
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

    submitPaletteMetaData(emoji){
        console.log(emoji);

        let paletteMetaData = {
            paletteName: this.state.newPaletteName,
            paletteEmoji: emoji.native
        };

        this.props.handleSubmit(paletteMetaData);
        this.handleClose();
    }
    
    handleClose() {
        this.setState({paletteSaveStage: 'none'});
    };

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    togglePaletteSaveStage(){

        let currSaveState = this.state.paletteSaveStage;

        if(currSaveState === 'none'){
            this.setState({paletteSaveStage: 'paletteName'});
        }
        if(currSaveState === 'paletteName'){
            this.setState({paletteSaveStage: 'paletteEmoji'});
        }
    }

  render() {
    const {classes} = this.props;
    const {open, newPaletteName} = this.state;
    return (
        <div className={classes.savePaletteDialog}>
            <Button onClick={this.togglePaletteSaveStage}>SAVE PALETTE</Button>
                <Dialog
                    open={this.state.paletteSaveStage === 'paletteName'}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title" className={classes.savePaletteDialogTitle}>Save Palette</DialogTitle>
                    <ValidatorForm onSubmit={this.togglePaletteSaveStage}>
                    <DialogContent className={classes.savePaletteDialogConsole}>
                        <DialogContentText className={classes.savePaletteDialogText}>
                            To save your new color palette, please enter a name below.
                        </DialogContentText>
                        
                            <TextValidator
                                label='PALETTE NAME'
                                name='newPaletteName' 
                                value={newPaletteName} 
                                onChange={this.handleChange}
                                fullWidth
                                margin='normal'
                                validators={[
                                'required',
                                'isPaletteNameUnique']}
                                errorMessages={[
                                'Enter a palette name...',
                                'Palette name not unique...try again.']}
                                className={classes.savePaletteDialogPaletteNameInput}
                            />

                    </DialogContent>
                    <DialogActions className={classes.savePaletteDialogConsoleFooter}>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>

                        <Button 
                            variant="contained" 
                            className={classes.savePaletteBtn}
                            size='small' 
                            type='submit'>
                            SAVE PALETTE
                        </Button>
                    </DialogActions>
                    </ValidatorForm>
                </Dialog>
                <Dialog 
                    open={this.state.paletteSaveStage === 'paletteEmoji'}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <div className={classes.emojiSelect}>
                        <Picker 
                            onSelect={this.submitPaletteMetaData}
                            title='Set palette emoji…' 
                            emoji='point_up'
                            style={{ color: 'daa520', backgroundColor: '#33333399'}}
                        />
                    </div>
                    
                </Dialog>
        </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormPaletteNameDialog);