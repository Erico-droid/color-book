import React, { Component } from 'react'
import Pallette from './Pallette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

export default class App extends Component {
  render() {
    return (
      <div>
        <Pallette pallette = {generatePalette(seedColors[3])}/>
      </div>
    )
  }
}
