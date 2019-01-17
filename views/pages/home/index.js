import React, { Component } from 'react';
import logo from '../../../src/logo.svg';
import '../../../src/App.css';

class Index extends Component {
  handleClick = (e) => {
    alert('hello react');
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="Bottom-container">
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
          </a>&nbsp;&nbsp;
            <a
              className="App-link"
              href="https://maptalks.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Maptalks
          </a>
            <div
              className="App-button"
              onClick={this.handleClick}
            >
              Click Me
          </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Index;
