import React, {Component} from 'react';
import Palette from './components/palette/Palette';
import seedPalettes from './resources/seedPalettes';


class App extends Component {
  render(){
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
