import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as maptalks from 'maptalks';
import Clock from './Component/clock/clock';

class App extends Component {
  handleClick = (e) => {
    alert('hello react');
  };

  componentDidMount() {
    /* eslint-disable no-unused-vars */
    const map = new maptalks.Map("map", {
      center: [-0.113049, 51.498568],
      zoom: 14,
      baseLayer: new maptalks.TileLayer("base", {
        urlTemplate:
          "http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
        subdomains: ["a", "b", "c", "d"],
        attribution:
          '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
      })
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div id="map" className="Map-container" />
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
            <Clock />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
