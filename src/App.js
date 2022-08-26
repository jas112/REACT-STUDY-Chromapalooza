import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Palette from './components/palette/Palette';
import PaletteList from './components/paletteList/PaletteList';
import seedPalettes from './resources/seedPalettes';
import { generateColorPalette, generateScaledPaletteById } from './resources/chromaColorHelper';


class App extends Component {

  render(){

    // console.log(generateColorPalette(seedPalettes[4]))

    return (
      <div className="App">

        <Switch>
          <Route exact path='/' render={(routeProps) => <PaletteList palettes={seedPalettes} {...routeProps} />} />
          {/* <Route exact path='/palette/:id' render={routeProps => (<Palette {...routeProps} />)}/> */}
          <Route exact path='/palette/:id' render={routeProps => (<Palette palette={ generateScaledPaletteById(routeProps.match.params.id)} />)}/>
        </Switch>

        {/* <div> */}
           {/* <Palette palette={generateColorPalette(seedPalettes[4])} /> */}
        {/* </div>  */}

      </div>
    );
  }
}

export default App;
