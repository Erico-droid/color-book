import React, { Component } from 'react'
import './ColorBox.css';

export default class ColorBox extends Component {
  render() {
    const {color, name} = this.props.background;
    return (
      <div style = {{background: color}} className='ColorBox'>
        <div className='copy-container'>
            <div className='box-content'>
                <span>{name}</span>
            </div>
            <button className='copy-button'>Copy</button>
        </div>
        <span className='see-more'>More</span>
      </div>
    )
  }
}
