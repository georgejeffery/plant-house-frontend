import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { Form, Button, Grid, Message } from "semantic-ui-react";
import API from "../API";

export default class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };
  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  render() {
    const { username, password } = this.state;
    return (
      <React.Fragment>
        <Grid textAlign="center">
          <Grid.Column style={{ maxWidth: 450 }}>
            {this.props.loginState ? (
              <Message>
                <p>Please Try Again!</p>
              </Message>
            ) : (
              ""
            )}
            <Form
              className="login-form"
              onSubmit={() => this.props.login(this.state)}
            >
              <Form.Input
                label="Enter Username"
                type="text"
                name="username"
                value={username}
                onChange={this.handleChange}
              />
              <Form.Input
                label="Enter Password"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
              <Button type="submit">Submit</Button>
            </Form>
            <Link to="/register">Not registered yet? Do that here!</Link>
          </Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}
