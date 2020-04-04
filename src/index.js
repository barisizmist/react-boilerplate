import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { createStore } from 'redux';
import messageReducer from './reducers/messageReducer';
import addMessage from './actions/addMessage';
import { Provider, connect } from 'react-redux';

//React-Redux
const mapStateToProps = (state) => {
    return { messages: state };
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitNewMessage: (message) => {
            dispatch(addMessage(message));
        }
    };
};

const store = createStore(messageReducer);
const Container = connect(mapStateToProps, mapDispatchToProps)(App);

class AppWrapper extends Component {
    render () {
        return (
            <Provider store={store}>
                <Container/>
            </Provider>
        );
    }
}

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
