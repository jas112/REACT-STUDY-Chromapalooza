import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Palette from './components/palette/Palette';
import seedPalettes from './resources/seedPalettes';
import { generateColorPalette } from './resources/chromaColorHelper';


class App extends Component {
  render(){
    console.log(generateColorPalette(seedPalettes[4]))
    return (
      <div className="App">

        <Switch>
          <Route exact path='/' render={() => <h1>Welcome to Chromapalooza</h1>} />
          <Route exact path='/palette/:id' render={() => <h1>Specific Palette</h1>} />
        </Switch>
        {/* <div>

          <Palette palette={generateColorPalette(seedPalettes[4])} />
        </div> */}
      </div>
    );
  }
}

export default App;
