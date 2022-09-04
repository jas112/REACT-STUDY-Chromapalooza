import React from 'react';
import {sortableElement} from 'react-sortable-hoc';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles/ColorElementStyles';

// const ColorElement = sortableElement(({ classes, color, colorName, contentColor, removeColor}) => {
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