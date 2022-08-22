import React, {Component} from 'react';
import Palette from './components/palette/Palette';
import seedPalettes from './resources/seedPalettes';


function App() {
  return (
    <div className="App">
      <div>
        <Palette {...seedPalettes} />
      </div>
    </div>
  );
}

export default App;
