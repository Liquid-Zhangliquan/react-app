import React, { Component } from 'react';
import '../clock/clock.css'
class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillMount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className="clock-div">
                <h2>Now is &nbsp;
            {this.state.date.getFullYear()}-
            {this.state.date.getMonth() + 1}-
            {this.state.date.getDate()} &nbsp;
            {this.state.date.getHours()}:
            {this.state.date.getMinutes()}:
            {this.state.date.getSeconds()}
                </h2>
            </div>
        )
    }
}
export default Clock;