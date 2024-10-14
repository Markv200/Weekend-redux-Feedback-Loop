// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './components/App/App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './components/App/App';
// import { Provider } from 'react-redux';
// import store from './store';  // Import the store

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         <Provider store={store}>  {/* Provide Redux store to the app */}
//             <App />
//         </Provider>
//     </React.StrictMode>
// );


// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
);
