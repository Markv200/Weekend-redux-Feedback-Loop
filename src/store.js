import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Reducer for feeling feedback
const feelingStore = (state = '', action) => {
    if (action.type === 'SET_FEELING') {
        return action.payload;
    }
    return state;
};

// Reducer for understanding feedback
const understandingStore = (state = '', action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload;
    }
    return state;
};

// Reducer for support feedback
const supportStore = (state = '', action) => {
    if (action.type === 'SET_SUPPORT') {
        return action.payload;
    }
    return state;
};

// Reducer for comments feedback
const commentsStore = (state = '', action) => {
    if (action.type === 'SET_COMMENTS') {
        return action.payload;
    }
    return state;
};

// Combine reducers and create the store
const store = createStore(
    combineReducers({
        feelingStore,
        understandingStore,
        supportStore,
        commentsStore,
    }),
    applyMiddleware(logger)
);

export default store;


