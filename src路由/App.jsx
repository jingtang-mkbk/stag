import React from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import About from "./About";
import Home from "./Home";

export default function App() {
  return (
    <>
      <div className="up">
        <Link to="/about">About</Link>
        <Link to="/home">Home</Link>
      </div>
      <div className="down">
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/home" component={Home} />
          <Redirect to="/about" />
        </Switch>
      </div>
    </>
  );
}
