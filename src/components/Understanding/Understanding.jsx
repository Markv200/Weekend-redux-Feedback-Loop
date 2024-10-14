import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Understanding = () => {
    const [understanding, setUnderstandingValue] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleNext = () => {
        dispatch({ type: 'SET_UNDERSTANDING', payload: understanding });
        history.push('/support');
    };

    return (
        <div>
            <h2>How well are you understanding the content?</h2>
            <input
                type="number"
                value={understanding}
                onChange={(e) => setUnderstandingValue(e.target.value)}
                data-testid="input"
                placeholder="1-5"
                required
                min="1"
                max="5"
            />
            <button data-testid="next" onClick={handleNext}>Next</button>
        </div>
    );
};

export default Understanding;
