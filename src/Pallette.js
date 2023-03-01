import React, { Component } from 'react'
import ColorBox from './ColorBox'
import './Pallette.css';

export default class Pallette extends Component {
  render() {
    const colorBoxes = this.props.pallette.colors.map(color => {
        return <ColorBox background={color} />
    })
    
    return (
      <div className='Palette'>
        {/* navbar */}
        <div className='Palette-colors'>
            {colorBoxes}
        </div>
        {/* footer */}
      </div>
    )
  }
}
