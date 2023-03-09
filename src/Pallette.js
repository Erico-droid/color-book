import React, { Component } from 'react'
import ColorBox from './ColorBox'
import './Pallette.css';
import NavBar from './NavBar';

export default class Pallette extends Component {
    constructor(props) {
        super(props);
        this.state = {level: 500, format: "hex"};
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(level) {
        this.setState({
            level: level
        })
    }

    changeFormat(evt) {
      this.setState({format: evt.target.value});
    }

  render() {
    const {colors, paletteName, emoji} = this.props.pallette;
    const {level, format} = this.state;
    const colorBoxes = colors[level].map(color => {
        return <ColorBox color={color[format]} name={color.name} key={color.id}/>
    })
    
    return (
      <div className='Palette'>
        <NavBar level = {level} changeLevel={this.changeLevel} handleChange={this.changeFormat} />
        <div className='Palette-colors'>
            {colorBoxes}
        </div>
        <footer className='palette-footer'>
          {paletteName}
          <span className='emoji'>{emoji}</span>
        </footer>
      </div>
    )
  }
}
