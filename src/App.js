import React, { Component } from 'react'
import Pallette from './Pallette';
import seedColors from './seedColors';

export default class App extends Component {
  render() {
    return (
      <div>
        <Pallette pallette = {seedColors[4]}/>
      </div>
    )
  }
}
