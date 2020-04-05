import React, { useState, useEffect } from 'react';
import './assets/style.scss';
import { useDispatch, useSelector } from 'react-redux';
import addMessage from './actions/addMessage';

export const App = (props) => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const app = useSelector(state => state);

    const handleChange = (event) => {
        setInput(event.target.value);
    };
    const handleSubmit = () => {
        if (!input.length) {
            return;
        }
        dispatch(addMessage(input));
        setInput('');
    };
    useEffect(() => {
        console.log(app);
    }, [app]);
    return (
        <div>
            <h4 className="center">Type and Submit</h4>
            <input
                onChange={handleChange}
                value={input}
            />
            <button className="submitBtn" onClick={handleSubmit}>
          Send
            </button>
            <br />
            <h5 className="center">Item List</h5>
            <ul>
                {app.map((message, idx) => (
                    <li key={idx}>{message}</li>
                ))}
            </ul>
        </div>
    );
};
