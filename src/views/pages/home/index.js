import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';
// import MapView from '../../../Component/map/map'
import MapView from '../../../Component/olMap/map'
import Clock from '../../../Component/clock/clock';

class Index extends Component {
  handleClick = (e) => {
    alert('hello react');
  };

  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <div className="Home-map"><MapView /></div>
          <img src={logo} className="Home-logo" alt="logo" />
          <div className="Bottom-container">
            <a
              className="Home-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
          </a>&nbsp;&nbsp;
            <a
              className="Home-link"
              href="https://maptalks.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Maptalks
          </a>
            <div
              className="Home-button"
              onClick={this.handleClick}
            >
              Click Me
          </div>
          <Clock />
          </div>
        </header>
      </div>
    );
  }
}

export default Index;
