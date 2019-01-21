import React, { Component } from 'react';

class NameForm extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        debugger
        //this.state = ({ inputext: event.target.value });https://segmentfault.com/q/1010000002958584/a-1020000002958732
        //使用对this.state赋值并没有什么作用，官方提醒，应该把this.state当成不可变变量。而使用this.setState方法，会触发异步修改状态，状态改变的同时，会重新执行一次willUpdate，render等流程。需要注意的是，避免在执行完this.setState后马上读取this.state，此操作并不会获得最新修改的状态。
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default NameForm;