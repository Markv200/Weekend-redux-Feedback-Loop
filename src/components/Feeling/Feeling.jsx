// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setFeeling } from '../../store';
// import { useHistory } from 'react-router-dom';

// const Feeling = () => {
//     const [feeling, setFeelingValue] = useState('');
//     const dispatch = useDispatch();
//     const history = useHistory();

//     const handleNext = () => {
//         dispatch(setFeeling(feeling));
//         history.push('/understanding');
//     };

//     return (
//         <div>
//             <h2>How are you feeling today?</h2>
//             <input
//                 type="number"
//                 value={feeling}
//                 onChange={(e) => setFeelingValue(e.target.value)}
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

// export default Feeling;\



// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';

// const Feeling = () => {
//     const [feeling, setFeelingValue] = useState('');
//     const dispatch = useDispatch();
//     const history = useHistory();

//     const handleNext = () => {
//         dispatch({ type: 'SET_FEELING', payload: feeling });
//         history.push('/understanding');
//     };

//     return (
//         <div>
//             <h2>How are you feeling today?</h2>
//             <input
//                 type="number"
//                 value={feeling}
//                 onChange={(e) => setFeelingValue(e.target.value)}
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

// export default Feeling;

// Feeling.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Feeling = () => {
    const [feeling, setFeelingValue] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleNext = () => {
        dispatch({ 
            type: 'SET_FEELING', 
            payload: feeling 
        }); // Dispatch action to update Redux store
        history.push('/understanding'); // Move to the next step
    };

    return (
        <div>
            <h2>How are you feeling today?</h2>
            <input
                type="number"
                value={feeling}
                onChange={(e) => setFeelingValue(e.target.value)}
                data-testid="input"
                placeholder="1-5"
                required
                min="1"
                max="5"
            />
            <button data-testid= "next" onClick={handleNext}>Next</button>
        </div>
    );
};

export default Feeling;
