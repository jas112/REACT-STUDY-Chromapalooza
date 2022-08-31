import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {ChromePicker} from 'react-color';
import chroma from 'chroma-js';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const styles = {
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
        // border: '1px solid green',
        '& .colorPickerConsoleBtn': {
            width: '225px',
            maxWidth: '100%',
            margin: '0 auto',
        },
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

    colorPickerSubConsole: {
        width: '225px',
        maxWidth: '100%',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '5px auto',
        '& button': {
            width: '110px',
            maxWidth: '100%',
            borderRadius: '0',
            fontSize: '.5rem',
            margin: '0 auto',
        }
    },

    colorPickerConsoleBtn: {
        width: '225px',
        maxWidth: '100%',
        height: '60px',
        borderRadius: '0',
        margin: '0 auto',
        fontSize: '1.5rem',
        '& svg':{
            color: '#000000', 
        }
    },

    txtValidatorFrame: {
        width: '100%',
        height: '100px',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'space-around',
        alignItems: 'center',
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
    
}

class PaletteFormColorPicker extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentColor: 'black',
            newColorName: '',
        };
        this.updateColorState = this.updateColorState.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){

        ValidatorForm.addValidationRule('isColorNameUnique', (value) => 
            this.props.colors.every(
            ({name}) => name.toLowerCase() !== value.toLowerCase()
            )
        );

        ValidatorForm.addValidationRule('isColorUnique', (value) => 
            this.props.colors.every(
            ({color}) => color !== this.state.currentColor
            )
        );

    }

    handleChange(evt){
    
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    updateColorState(colorValue){
        // console.log(colorValue);
        this.setState({currentColor: colorValue.hex});
    }

    handleSubmit(){

        const {currentColor, newColorName} = this.state;
        console.log(`add currentColor: ${currentColor} | with newColorName: ${newColorName}`);
        const newColor = {
            color: this.state.currentColor,
            name: this.state.newColorName
        };

        console.log(`add newColor: ${JSON.stringify(newColor)}`);
        this.props.addColor(newColor);
        this.setState({newColorName: ''});
    }

  render() {
    const {classes, hasMaxColorCount} = this.props;
    const {currentColor, newColorName} = this.state;

    let isDarkColor = chroma(currentColor).luminance() <= .55;
    let addBtnColor = isDarkColor ? '#ffffff' : '#000000';

    return (
      <div>   

        <ChromePicker color={currentColor} onChangeComplete={(newColor) => this.updateColorState(newColor)} />
              
        <ValidatorForm onSubmit={this.handleSubmit} ref='form'>

            <div className={classes.txtValidatorFrame}>
                <TextValidator
                    label='COLOR NAME'
                    name='newColorName' 
                    value={newColorName} 
                    onChange={this.handleChange} 
                    validators={[
                    'required',
                    'isColorNameUnique',
                    'isColorUnique']}
                    errorMessages={[
                    'Enter a color name...',
                    'Color name not unique...try again.', 
                    'Color value not unique...try again.']}
                /> 
            </div>

            <Button 
                variant="contained" 
                size="large" 
                color='primary'
                type='submit' 
                className={`${classes.margin} ${classes.colorPickerConsoleBtn}`}
                style={{
                backgroundColor: currentColor,
                color: addBtnColor,
                }}
                disabled={hasMaxColorCount}
            >

                {hasMaxColorCount ? `PALETTE FULL` : `ADD COLOR`}

            </Button>

        </ValidatorForm>
      </div>
    )
  }
}

export default withStyles(styles)(PaletteFormColorPicker);