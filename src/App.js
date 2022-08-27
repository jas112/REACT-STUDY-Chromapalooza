import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Palette from './components/palette/Palette';
import PaletteList from './components/paletteList/PaletteList';
import PaletteForm from './components/paletteForm/PaletteForm';
import SingleColorPalette from './components/singleColorPalette/SingleColorPalette';
import seedPalettes from './resources/seedPalettes';
import { generateColorPalette, generateScaledPaletteById, generateSingleColorPalette } from './resources/chromaColorHelper';


class App extends Component {

  render(){

    // let testPalette = generateScaledPaletteById('material-ui-colors');
    // console.log(`testPalette: ${JSON.stringify(testPalette)}`);

    // let testPalette2 = generateSingleColorPalette(testPalette, `green`);
    // console.log(`testPalette2: ${JSON.stringify(testPalette2)}`);

    // let testPalette2 = generateSingleColorPalette('material-ui-colors', `green`);
    // console.log(`testPalette2: ${JSON.stringify(testPalette2)}`);

    // console.log(generateColorPalette(seedPalettes[4]))

    return (
      <div className="App">

        <Switch>
          <Route exact path='/' render={(routeProps) => <PaletteList palettes={seedPalettes} {...routeProps} />} />
          {/* <Route exact path='/palette/:id' render={routeProps => (<Palette {...routeProps} />)}/> */}
          <Route exact path='/palette/new' render={routeProps => (<PaletteForm {...routeProps} />)}/>
          <Route exact path='/palette/:id' render={routeProps => (<Palette palette={ generateScaledPaletteById(routeProps.match.params.id)} />)}/>
          <Route exact path='/palette/:paletteId/:colorId' render={routeProps => (<SingleColorPalette palette={generateSingleColorPalette(routeProps.match.params.paletteId, routeProps.match.params.colorId)} />)}/>
        </Switch>

        {/* <div> */}
           {/* <Palette palette={generateColorPalette(seedPalettes[4])} /> */}
        {/* </div>  */}

      </div>
    );
  }
}

export default App;
