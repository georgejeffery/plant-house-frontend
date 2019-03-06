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
<<<<<<< HEAD:src/App/App.js
=======
    failedRegister: false
>>>>>>> george:src/App.js
  };

  addUsertoState = userId => {
    API.getUser(userId).then(user => this.setState({ user: user }));
  };

  logoutUser = () => {
    this.setState({ user: "" });
  };

  submit = user => {
<<<<<<< HEAD:src/App/App.js
    API.createUser(user).then(user => this.setState({ user }));
    this.props.history.push("/");
=======
    if (user.name) {
      API.createUser(user).then(resp => this.setState({ user: resp }));
      this.props.history.push("/");
    } else {
      this.setState({ failedRegister: true });
    }
>>>>>>> george:src/App.js
    //this.addUsertoState(user.id);
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
          <Route exact path="/" component={() => <SideBar user={this.state.user}/>} />
          <Route exact path="/login" component={Login} />
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
