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
    user: {
      "id": 1,
      "created_at": "2019-03-06T09:53:57.906Z",
      "updated_at": "2019-03-06T09:53:57.906Z",
      "name": "George",
      "username": "George",
      "password_digest": null,
      "email": "george@george.com",
      "encrypted_password": "$2a$11$2naw9sC4qtHe1TH9jhIAbeyN/pWX.LwwdTJu0AEGfH14WXT28xktm",
      "reset_password_token": null,
      "reset_password_sent_at": null,
      "remember_created_at": null,
      "rooms": [
        {
          "id": 1,
          "created_at": "2019-03-01T09:48:34.264Z",
          "updated_at": "2019-03-01T09:48:34.264Z",
          "name": "New Room",
          "user_id": 1,
          "light": null,
          "temperature": null,
          "humidity": null,
          "flowers": null
        }
      ]
    },
    failedRegister: false
  };

  addUsertoState = userId => {
    API.getUser(userId).then(user => this.setState({ user: user }));
  };

  logoutUser = () => {
    this.setState({ user: "" });
  };

  submit = user => {
    if (user.name) {
      API.createUser(user).then(resp => this.setState({ user: resp }));
      this.props.history.push("/");
    } else {
      this.setState({ failedRegister: true });
    }
    //this.addUsertoState(user.id);
  };

  login = user => {
    API.authorise(user)
      .then(resp => API.getUser(resp))
      .then(user => this.setState({ user }));
    this.props.history.push("/main");
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
            component={() => <Login login={this.login} />}
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
