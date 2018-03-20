import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor (props) {
    super(props);
  }
  buttonClicker = (event) => {
    this.props.controlFunc(event.target.name)
  }

  render () {
    return (
      <div>
        <button name={this.props.name}
                id={this.props.id}
                onClick={this.buttonClicker}>{this.props.name}{this.props.faveNum}</button>
      </div>
    )
  }
}



export default Button;
