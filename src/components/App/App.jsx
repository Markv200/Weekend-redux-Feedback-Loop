import React from "react";
import "./App.css";
import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding";
import Support from "../Support/Support";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Comments from "../Comments/Comments";
import Review from "../Review/Review";
import Success from "../Thankyou/Thankyou";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Switch>
          <Route path="/" exact>
            <Feeling />
          </Route>
          <Route path="/understanding">
            <Understanding />
          </Route>
          <Route path="/support">
            <Support />
          </Route>
          <Route path="/comments">
            <Comments />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
