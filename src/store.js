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

// Action creators for dispatching feedback
export const setFeeling = (feeling) => ({
    type: 'SET_FEELING',
    payload: feeling
});

export const setUnderstanding = (understanding) => ({
    type: 'SET_UNDERSTANDING',
    payload: understanding
});

export const setSupport = (support) => ({
    type: 'SET_SUPPORT',
    payload: support
});

export const setComments = (comments) => ({
    type: 'SET_COMMENTS',
    payload: comments
});

export const resetFeedback = () => ({
    type: 'RESET_FEEDBACK'
});

// Combine all feedback reducers
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
