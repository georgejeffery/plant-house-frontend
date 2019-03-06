import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Grid, Menu, Button } from "semantic-ui-react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import API from "../API";
import Login from "./Login";
import Register from "../Register";

class App extends Component {
  state = {
    user: "",
  };

  addUsertoState = userId => {
    API.getUser(userId).then(user => this.setState({ user: user }));
  };

  logoutUser = () => {
    this.setState({ user: "" });
  };

  submit = user => {
    API.createUser(user).then(user => this.setState({ user }));
    this.props.history.push("/");
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
            component={() => <Register submit={this.submit} />}
          />
        </React.Fragment>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
