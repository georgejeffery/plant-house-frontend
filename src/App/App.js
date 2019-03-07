import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Grid, Menu, Button, Message } from "semantic-ui-react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import API from "../API";
import Login from "./Login";
import Register from "../Register";

class App extends Component {
  state = {
    user: "",
    failedRegister: false,
    failedLogin: false
  };

  addUsertoState = userId => {
    API.getUser(userId).then(user => this.setState({ user: user }));
  };

  logoutUser = () => {
    this.setState({ user: "" });
  };

  submit = user => {
    if (user.name) {
      API.createUser(user).then(resp =>
        this.setState({ user: resp }, () => {
          this.props.history.push("/main");
        })
      );
    } else {
      this.setState({ failedRegister: true });
    }
    //this.addUsertoState(user.id);
  };

  login = user => {
    API.authorise(user)
      .then(resp => API.getUser(resp))
      .then(user => {
        if (user.name) {
          this.setState({ user }, () => {
            this.props.history.push("/main");
          });
        } else {
          this.setState({ failedLogin: true });
        }
      });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          user={this.state.user}
          logout={this.logoutUser}
          history={this.props.history}
        />
        <React.Fragment>
          <Route
            exact
            path="/main"
            component={() => <SideBar user={this.state.user} />}
          />
          <Route
            exact
            path="/"
            component={() => (
              <Login login={this.login} loginState={this.state.failedLogin} />
            )}
          />
          <Route
            exact
            path="/register"
            component={() => (
              <Register
                submit={this.submit}
                registerState={this.state.failedRegister}
              />
            )}
          />
        </React.Fragment>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
