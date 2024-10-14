// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';

// const Support = () => {
//     const [support, setSupportValue] = useState('');
//     const dispatch = useDispatch();
//     const history = useHistory();

//     const handleNext = () => {
//         dispatch({ type: 'SET_SUPPORT', payload: support });
//         history.push('/comments');
//     };

//     return (
//         <div>
//             <h2>How well are you being supported?</h2>
//             <input
//                 type="number"
//                 value={support}
//                 onChange={(e) => setSupportValue(e.target.value)}
//                 data-testid="input"
//                 placeholder="1-5"
//                 required
//                 min="1"
//                 max="5"
//             />
//             <button data-testid="next" onClick={handleNext}>Next</button>
//         </div>
//     );
// };

// export default Support;


// Support.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Support = () => {
    const [support, setSupportValue] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleNext = () => {
        dispatch({ type: 'SET_SUPPORT', payload: support });
        history.push('/comments');
    };

    return (
        <div>
            <h2>How well are you being supported?</h2>
            <input
                type="number"
                value={support}
                onChange={(e) => setSupportValue(e.target.value)}
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

export default Support;
