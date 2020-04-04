import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './app';

export default class Index extends Component {
  render() {
    return (
      <div>
        <App />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
