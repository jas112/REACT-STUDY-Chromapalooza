import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {

    colorElementOuterFrame: {
        width: '20%',
        height: '25%',
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
        }
    },

    colorElementInnerFrame: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
            '& section': {
                width: '93%',
                height: '91%',
                transition: '.25s ease-in-out',
            },
        }
    },

    colorElement: {
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
        '& .DeleteIcon': {
            fontSize: '15px !important',
        }
    },
    
}

function ColorElement(props) {
  return (
    <div className={props.classes.colorElementOuterFrame} >
        <div className={props.classes.colorElementInnerFrame} >
            <section className={props.classes.colorElement}  style={{backgroundColor: props.color, color: props.contentColor}}>
                <div className={props.classes.colorElementDetails} >
                    <div className={props.classes.colorElementName} >
                        {props.colorName}       
                    </div>
                    <div className={props.classes.colorElementOperation} >
                        <DeleteIcon cla/>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default withStyles(styles)(ColorElement);