import React, { Component } from 'react';
import './assets/style.scss';

export default class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            input: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange (event) {
        this.setState({
            input: event.target.value
        });
    }
    handleSubmit () {
        if (!this.state.input.length) {
            return;
        }
        this.props.submitNewMessage(this.state.input);
        this.setState({
            input: ''
        });
    }
    render () {
        return (
            <div>
                <h4 className="center">Type and Submit</h4>
                <input
                    onChange={this.handleChange.bind(this)}
                    value={this.state.input}
                />
                <button className="submitBtn" onClick={this.handleSubmit}>
          Send
                </button>
                <br />
                <h5 className="center">Item List</h5>
                <ul>
                    {this.props.messages.map((message, idx) => (
                        <li key={idx}>{message}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
