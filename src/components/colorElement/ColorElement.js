import React from 'react';
import {SortableElement} from 'react-sortable-hoc';
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

// const ColorElement = SortableElement(({ classes, color, colorName, contentColor, removeColor}) => {
//     // const { classes, color, colorName, contentColor, removeColor} = props;
//   return (
//     <div className={classes.colorElementOuterFrame} >
//         {/* <div className={classes.colorElementInnerFrame} >  */}
//             <section className={classes.colorElement}  style={{backgroundColor: color, color: contentColor}}>
//                 <div className={classes.colorElementDetails} >
//                     <div className={classes.colorElementName} >
//                         {colorName}       
//                     </div>
//                     <div className={classes.colorElementOperation} >
//                         <DeleteIcon onClick={removeColor} />
//                     </div>
//                 </div>
//             </section>
//         {/* </div> */}
//     </div>
//   )
// });

// export default withStyles(styles)(ColorElement);

function ColorElement(props){
   const { classes, color, colorName, contentColor, removeColor} = props;
   return (
    <div className={classes.colorElementOuterFrame} >
        <div className={classes.colorElementInnerFrame} > 
            <section className={classes.colorElement}  style={{backgroundColor: color, color: contentColor}}>
                <div className={classes.colorElementDetails} >
                    <div className={classes.colorElementName} >
                        {colorName}       
                    </div>
                    <div className={classes.colorElementOperation} >
                        <DeleteIcon onClick={removeColor} />
                    </div>
                </div>
            </section>
         </div>
    </div>
  )
}

export default withStyles(styles)(ColorElement);