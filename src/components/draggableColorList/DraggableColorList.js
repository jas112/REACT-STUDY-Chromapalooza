import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { v4 as uuidv4 } from 'uuid';
import ColorElement from '../colorElement/ColorElement';
import chroma from 'chroma-js';
import { sortableContainer } from 'react-sortable-hoc';

const styles = {
    draggableColorListConsole: {
        width: '100%',
        height: '100%'
    }
}

// function DraggableColorList(props) {
//     const {classes, colors, removeColor} = props;

//     let paletteColors = colors.map((color) => {
//         let colorIsDark = chroma(color.color).luminance() <= .6;
//         let textColor = colorIsDark ? '#ffffff' : '#000000';
//         console.log(`colorIsDark: ${colorIsDark} | textColor: ${textColor}`);
//         return(<ColorElement 
//             key={uuidv4()} 
//             color={color.color} 
//             colorName={color.name} 
//             // colorId={color.id}
//             contentColor ={textColor} 
//             style={{fontSize: '14px'}} 
//             handleClick={() => removeColor(color.name)}
//         />);
//     });

//   return (
//     <div className={classes.draggableColorListConsole}>
//         {paletteColors}
//     </div>
//   )
// }

const DraggableColorList = sortableContainer(({classes, colors, removeColor}) => {

  return (
    <div className={classes.draggableColorListConsole}>
        {colors.map((color, idx) => {
            let colorIsDark = chroma(color.color).luminance() <= .6;
            let textColor = colorIsDark ? '#ffffff' : '#000000';
            return(
                <ColorElement 
                    index={idx}
                    key={uuidv4()} 
                    color={color.color} 
                    colorName={color.name} 
                    colorId={color.id}
                    contentColor ={textColor} 
                    style={{fontSize: '14px'}} 
                    // handleClick={() => removeColor(color.name)}
                    removeColor={() => removeColor(color.name)}
                    removeColor1={() => console.log(color.name)}
                />
            )
        })}
    </div>
  )

})

export default withStyles(styles)(DraggableColorList)


