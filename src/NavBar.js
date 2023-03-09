import React, { Component } from 'react';
import Select from "@material-ui/core/Select";
import { MenuItem } from '@material-ui/core';
import { Snackbar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Close } from "@material-ui/icons"
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import "./NavBar.css";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state ={
      format: "hex",
      open: false
    }
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  closeSnackbar() {
    this.setState({
      open:false
    })
  }

  handleFormatChange(e){
    this.setState({format: e.target.value, open: true});
    this.props.handleChange(e);
  }

  render() {
    const {level, changeLevel} = this.props;
    const {format} = this.state;

    return (
      <header className='Navbar'>
        <div className='logo'>
            <a href="#">COLORBOOK</a>
        </div>
        <div className='slider-container'>
        <span>level: {level}</span>
        <div className='slider'>
          <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={ changeLevel}/>
        </div>
        </div>
        <div className='select-container'>
          <Select onChange={this.handleFormatChange} value={format}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar anchorOrigin={{vertical: "bottom", horizontal: "left"}} open={this.state.open} autoHideDuration={3000}
        message={<span id="message-id">Format Changed to {format.toUpperCase()}</span>} ContentProps={{"aria-describedby":"message-id"}} onClose={this.closeSnackbar} action={[<IconButton onClick={this.closeSnackbar}  color='inherit' key='close' aria-label='close'>
          <Close />     
        </IconButton>]} />
      </header>
    )
  }
}
