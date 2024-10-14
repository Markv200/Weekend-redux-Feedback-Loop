// import React from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {

//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <h1 className='App-title'>Feedback!</h1>
//         <h4>Don't forget it!</h4>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Feeling from './components/Feeling';
import Understanding from './components/Understanding';
import Support from './components/Support';
import Comments from './components/Comments';
import Review from './components/Review';
import Success from './components/Success';
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Route path="/" exact component={Feeling} />
                    <Route path="/understanding" component={Understanding} />
                    <Route path="/support" component={Support} />
                    <Route path="/comments" component={Comments} />
                    <Route path="/review" component={Review} />
                    <Route path="/success" component={Success} />
                </div>
            </Router>
        </Provider>
    );
}

export default App;

