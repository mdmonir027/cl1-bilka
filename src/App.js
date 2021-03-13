import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./Components/header/Header";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <h2>Home</h2>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
