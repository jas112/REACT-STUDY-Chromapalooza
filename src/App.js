import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import { withStyles } from '@material-ui/styles';
import Palette from './components/palette/Palette';
import PaletteList from './components/paletteList/PaletteList';
import PaletteForm from './components/paletteForm/PaletteForm';
import SingleColorPalette from './components/singleColorPalette/SingleColorPalette';
import Page from './components/page/Page';
import seedPalettes from './resources/seedPalettes';
// import { generateColorPalette, generateScaledPaletteById, generateSingleColorPalette } from './resources/chromaColorHelper';
import { generateScaledPaletteById, generateSingleColorPalette } from './resources/chromaPaletteHelper';
import {TransitionGroup, CSSTransition} from 'react-transition-group'



class App extends Component {
  constructor(props){
    super(props);

    const storedPalettes = JSON.parse(window.localStorage.getItem('storedPalettes'));

    this.state = {
      availablePalettes: storedPalettes || seedPalettes,
    }
    this.retreivePalette = this.retreivePalette.bind(this);
    this.savePalette = this.savePalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }

  retreivePalette(id){
    return this.state.palettes.find(function(palette){
      return palette.id === id;
    })
  }

  savePalette(newPalette){
      console.log(`newPalette: ${JSON.stringify(newPalette)}`);
      this.setState({availablePalettes: [...this.state.availablePalettes, newPalette]},
        this.syncLocalStorage
      );
  }

  deletePalette(id){
    console.log(`@App.js deletePalette: target Palette => ${id}`);
    let remainingPalettes = this.state.availablePalettes.filter(palette => palette.id !== id);
    this.setState({availablePalettes: remainingPalettes},
      this.syncLocalStorage
    );
  }

  syncLocalStorage(){
    window.localStorage.setItem(
      'storedPalettes', 
      JSON.stringify(this.state.availablePalettes)
    );
  }

  render(){

    const {availablePalettes} = this.state;

    // let testPalette = generateScaledPaletteById('material-ui-colors');
    // console.log(`testPalette: ${JSON.stringify(testPalette)}`);

    // let testPalette2 = generateSingleColorPalette(testPalette, `green`);
    // console.log(`testPalette2: ${JSON.stringify(testPalette2)}`);

    // let testPalette2 = generateSingleColorPalette('material-ui-colors', `green`);
    // console.log(`testPalette2: ${JSON.stringify(testPalette2)}`);

    // console.log(generateColorPalette(seedPalettes[4]))

    return (
      <div className='App'>
        <Route render={({location}) => (
            <TransitionGroup>
              <CSSTransition key={location.key} classNames='page' timeout={500}>
                <Switch location={location}>
                  <Route exact path='/' render={(routeProps) => (
                    <Page>
                      <PaletteList palettes={availablePalettes} {...routeProps} deletePalette={this.deletePalette}/>
                    </Page>
                  )} />
                  <Route exact path='/palette/new' render={(routeProps) => (
                    <Page>
                      <PaletteForm {...routeProps} availablePalettes={availablePalettes} savePalette={this.savePalette} />
                    </Page>
                  )}/>
                  <Route exact path='/palette/:id' render={(routeProps) => (
                    <Page>
                      <Palette palette={ generateScaledPaletteById(routeProps.match.params.id, availablePalettes)} />
                    </Page>
                  )}/>
                  <Route exact path='/palette/:paletteId/:colorId' render={(routeProps) => (
                    <Page>
                      <SingleColorPalette palette={generateSingleColorPalette(routeProps.match.params.paletteId, routeProps.match.params.colorId, availablePalettes)} />
                    </Page>
                  )}/>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
        )}>
        </Route>


        {/* <div> */}
           {/* <Palette palette={generateColorPalette(seedPalettes[4])} /> */}
        {/* </div>  */}

      </div>
    );
  }
}

export default App;
