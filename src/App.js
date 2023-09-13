import React from "react";
import Homepage from "./pages/Homepage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Moviedetails from "./pages/moviedetails";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />

          <Route path="/:id" component={Moviedetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
