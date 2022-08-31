import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {ChromePicker} from 'react-color';
import chroma from 'chroma-js';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

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

export default PaletteFormColorPicker;