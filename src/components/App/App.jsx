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
// import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// // import store from '../store';
// import Feeling from '../Feeling/Feeling';
// import Understanding from '../Understanding/Understanding';
// import Support from '../Support/Support';
// import Comments from '../Comments/Comments';
// import Review from '../Review/Review';
// import Success from '../Success/Success';
// import './App.css';

// function App() {
//     return (
//         <Provider store={store}>
//             <Router>
//                 <div className="App">
//                     <Route path="/" exact component={Feeling} />
//                     <Route path="/understanding" component={Understanding} />
//                     <Route path="/support" component={Support} />
//                     <Route path="/comments" component={Comments} />
//                     <Route path="/review" component={Review} />
//                     <Route path="/success" component={Success} />
//                 </div>
//             </Router>
//         </Provider>
//     );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Feeling from '../Feeling/Feeling';
// import Understanding from '../Understanding/Understanding';
// import Support from '../Support/Support';
// import Comments from '../Comments/Comments';
// import Review from '../Review/Review';
// import Success from '../Success/Success';
// import './App.css';

// function App() {
//     return (
//         <Router>
//             <div className="App">
//                 <Route path="/" exact component={Feeling} />
//                 <Route path="/understanding" component={Understanding} />
//                 <Route path="/support" component={Support} />
//                 <Route path="/comments" component={Comments} />
//                 <Route path="/review" component={Review} />
//                 <Route path="/success" component={Success} />
//             </div>
//         </Router>
//     );
// }

// export default App;


// import React from 'react';
// import { HashRouter as Router, Route } from 'react-router-dom';
// import Feeling from '../Feeling/Feeling';
// import Understanding from '../Understanding/Understanding';
// import Support from '../Support/Support';
// import Comments from '../Comments/Comments';
// import Review from '../Review/Review';
// import Success from '../Success/Success';
// import './App.css';  // Import the CSS file here

// function App() {
//     return (
//         <Router>
//             <div className="App">
//                 <header className="App-header">
//                     <h1 className="App-title">Feedback!</h1>
//                 </header>
//                 <p className="App-intro">Don't forget it!</p>
//                 <Route path="/" exact component={Feeling} />
//                 <Route path="/understanding" component={Understanding} />
//                 <Route path="/support" component={Support} />
//                 <Route path="/comments" component={Comments} />
//                 <Route path="/review" component={Review} />
//                 <Route path="/success" component={Success} />
//                 <h4>This is an italicized subtitle</h4>
//             </div>
//         </Router>
//     );
// }

// export default App;


import React from 'react';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Success from '../Thankyou/Thankyou';

function App() {
  return (
    // Route Start
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
        </header>
        
        <Switch>
          <Route path="/" exact>
            <Feeling/>  
          </Route>
          <Route path="/understanding">
            <Understanding/>
          </Route>
          <Route path="/support">
            <Support/>
          </Route>
          <Route path="/comments">
            <Comments/>
          </Route>
          <Route path="/review">
            <Review/>
          </Route>
          <Route path="/success">
            <Success/>
          </Route>
        </Switch>
      </div>
    </Router>
    // Router End
  );
}

export default App;
