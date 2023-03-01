import React, { Component } from 'react'
import ColorBox from './ColorBox'
import './Pallette.css';
import NavBar from './NavBar';

export default class Pallette extends Component {
    constructor(props) {
        super(props);
        this.state = {level: 500};
        this.changeLevel = this.changeLevel.bind(this);
    }

    changeLevel(level) {
        this.setState({
            level: level
        })
    }

  render() {
    const {colors} = this.props.pallette;
    const {level} = this.state;
    const colorBoxes = colors[level].map(color => {
        return <ColorBox color={color.hex} name={color.name} />
    })
    
    return (
      <div className='Palette'>
        <NavBar level = {level} changeLevel={this.changeLevel}/>
        {/* navbar */}
        <div className='Palette-colors'>
            {colorBoxes}
        </div>
        {/* footer */}
      </div>
    )
  }
}
