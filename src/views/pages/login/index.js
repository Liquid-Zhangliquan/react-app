import React, { Component } from 'react';
import './index.css';
import Form from './loginform'

export default class Index extends Component {

  componentDidMount() {
    /* eslint-disable no-unused-vars */
  }
  render() {
    return (
      <div className="Login-contain">
        <Form />
      </div>
    );
  }
}


