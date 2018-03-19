import React, { Component } from 'react';
import './App.css';
import Sidebar from '../Sidebar/Sidebar';
import Button from '../Button/Button';
class App extends Component {










  render() {
    return (
      <div className="App-container">
      <div className="Background"></div>
        <div className="Foreground">
          <h1 className="main-title">SWapiBox</h1>
          <div className="buttons-container">
          <Button title={'people'}/>
          <Button title={'planets'}/>
          <Button title={'vehicles'}/>
          </div>


          <Sidebar />

      </div>
      </div>
    );
  }
}

export default App;
