import React, { useState } from 'react';
import './assets/style.scss';
import { useDispatch, useSelector } from 'react-redux';
import addItem from './actions/addItem';
import increment from './actions/increment';
import removeItem from './actions/removeItem';

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
        dispatch(addItem(input));
        setInput('');
    };
    const handleIncrement = () => {
        dispatch(increment(1));
    };
    const handleDecrement = () => {
        if (app.count === 0) return;
        dispatch(increment(-1));
    };
    const handleRemove = (idx) => {
        dispatch(removeItem(idx));
    };
    // useEffect(() => {
    //     console.log(app);
    // }, [app]);

    return (
        <div>
            <h4 className="center">Type and click</h4>
            <input onChange={handleChange} value={input}/>
            <button className="submitBtn" onClick={handleSubmit}>Send</button>
            <br />
            <button className="dec" onClick={handleDecrement}>▼</button>
            <span>{app.count}</span>
            <button className="inc" onClick={handleIncrement}>▲</button>
            <br/>
            <h5 className="center">Item List</h5>
            <ul className="list">
                {app.items.map((item, idx) => (
                    <li className="item" key={idx}>{(idx + 1) + ') '}
                        {item}<button className="removeItem" onClick={() => handleRemove(idx)}>X</button></li>
                ))}
            </ul>
        </div>
    );
};
