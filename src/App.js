import React, { Component } from "react";
import "./App.css";
import { Header } from "./Components/Header";
import { Introduction } from "./Components/Introduction";
import { Personal } from "./Components/Personal";
import Switch from "react-router-dom/Switch";
import { Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <Switch>
            <Route exact path="/" component={Introduction} />
            <Route path="/personal" component={Personal} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
