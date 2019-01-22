import React, { Component } from 'react';
import './index.css';
import LoginForm from '../../../Component/form/loginform';

export default class Index extends Component {

  componentDidMount() {
    /* eslint-disable no-unused-vars */
  }
  render() {
    return (
      <div className="Login-contain">
        <div className="loginform-contain">
          <LoginForm></LoginForm>
        </div>
      </div>
    );
  }
}


