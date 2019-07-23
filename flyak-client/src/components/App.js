import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./Navbar";
import Flight from "./Flight";
import FlightList from "./FlightList";

import adapter from "../api/adapter";

class App extends React.Component {
  state = {
    modal: null,
    currentUser: null,
    loggedIn: false
  };

  componentDidMount() {
    adapter
      .login()
      .then(user => this.setState({ currentUser: user, loggedIn: true }));
  }

  render() {
    if (!this.state.loggedIn) {
      return (
        <section className="section">
          <div className="container">
            <h1 className="title">Loading...</h1>
          </div>
        </section>
      );
    }
    return (
      <div className="App">
        <Navbar user={this.state.currentUser} />
        <Switch>
          <Route
            path="/flights/:id"
            render={props => (
              <Flight {...props} user={this.state.currentUser} />
            )}
          />
          <Route path="/" component={FlightList} />
        </Switch>
      </div>
    );
  }
}

export default App;
