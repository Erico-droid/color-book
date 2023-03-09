import React, { Component } from 'react'
import Pallette from './Pallette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import {Route, Routes} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Routes>
      <Route exact path='/' element={<h1>Palette list goes here</h1>} />
      <Route exact path='/palette/:id' element={<h1>Individual palette</h1>} />
      </Routes>
      // <div>
      //   <Pallette pallette = {generatePalette(seedColors[3])}/>
      // </div>
    )
  }
}
