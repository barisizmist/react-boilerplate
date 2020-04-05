import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import { createStore } from 'redux';
import messageReducer from './reducers/messageReducer';
// import addMessage from './actions/addMessage';
import { Provider } from 'react-redux';

//React-Redux
// const mapStateToProps = (state) => {
//     return { messages: state };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         submitNewMessage: (message) => {
//             dispatch(addMessage(message));
//         }
//     };
// };


const store = createStore(messageReducer);
// const Container = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));
