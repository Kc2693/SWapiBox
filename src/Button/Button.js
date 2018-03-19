import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor (props) {
    super(props);
  }
  buttonClicker = () => {
    console.log('hello')
  }

  render () {
    return (
      <div className="button-container">
        <button id="category-button" onClick={this.buttonClicker}>{this.props.title}</button>
      </div>
    )
  }
}



export default Button;
