import React, { Component } from 'react';
class hello extends Component {
    handleClick = (e) => {
        alert('hello react');
    };
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>click me</button>
            </div>
        )
    }
}
export default hello;