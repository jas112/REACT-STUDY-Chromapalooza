import React, {Component} from 'react';
import Palette from './components/palette/Palette';
import seedPalettes from './resources/seedPalettes';
import { generateColorPalette } from './resources/chromaColorHelper';


class App extends Component {
  render(){
    console.log(generateColorPalette(seedPalettes[4]))
    return (
      <div className="App">
        <div>
          <Palette {...seedPalettes[4]} />
        </div>
      </div>
    );
  }
}

export default App;
