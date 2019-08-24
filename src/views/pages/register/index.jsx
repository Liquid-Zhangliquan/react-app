import React, { Component } from 'react';
import './index.css';
import Registerform from '../../../Component/form/registerform';

export default class Index extends Component {

  componentDidMount() {
    /* eslint-disable no-unused-vars */
  }
  render() {
    return (
      <div className="Register-contain">
        <Registerform></Registerform>
      </div>
    );
  }
}


