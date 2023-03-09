import React, { Component } from 'react'
import Pallette from './Pallette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import {Route, Routes} from 'react-router-dom';
import withRouter from './withRouter';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentId: "material-ui-colors"
    }
    this.setId = this.setId.bind(this);
  }

  setId(id_palette) {
    this.setState({
      currentId: id_palette
    })
  }


  // findPalette(id) {
  //   seedColors.find(function(palette) {
  //     return palette.id === id;
  //   })
  // }

  findPalette(id) {
    for (var key in seedColors) {
      if (seedColors[key].id === id) {
        return seedColors[key];
      }
    }
  }


  render() {
    const id = this.state.currentId;
    return (
      <Routes>
      <Route exact path='/' element={<h1>Palette list goes here</h1>} />
      <Route exact path='/palette/:id' element={ id.length === 0 ? <Pallette setId={this.setId} /> :
          <Pallette pallette={generatePalette(this.findPalette(id))} setId={this.setId}/>
          // null
        } />
      </Routes>
      // <div>
      //   <Pallette pallette = {generatePalette(seedColors[3])}/>
      // </div>
    )
  }
}
