import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import Examples from "pages/Examples";

function App() {
  return (
    <div className='App'>
      <Router>
        <Route path='/' exact component={LandingPage} />
        <Route path='/examples' component={Examples} />
      </Router>
    </div>
  );
}

export default App;
