import React, { Component } from 'react';
import './index.css';
import Findform from '../../../Component/form/findform';

export default class Index extends Component {

  componentDidMount() {
    /* eslint-disable no-unused-vars */
  }
  render() {
    return (
      <div className="Findpws-contain">
        <Findform></Findform>
      </div>
    );
  }
}


