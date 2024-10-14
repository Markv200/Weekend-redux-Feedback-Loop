import React from 'react';
import { useHistory } from 'react-router-dom';

const Success = () => {
    const history = useHistory();

    const handleNewFeedback = () => {
        history.push('/');
    };

    return (
        <div>
            <h2>Thank You!</h2>
            <button data-testid="next" onClick={handleNewFeedback}>Leave New Feedback</button>
        </div>
    );
};

export default Success;
