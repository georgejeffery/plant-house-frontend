import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { Form, Button, Grid } from "semantic-ui-react";

export default class Register extends React.Component {
  state = {
    name: "",
    email: "",
    username: "",
    password: ""
  };
  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  render() {
    const { name, email, username, password } = this.state;

    return (
      <React.Fragment>
        <Grid textAlign="center">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form
              className="login-form"
              onSubmit={() => this.props.submit(this.state)}
            >
              <Form.Input
                label="Enter Name"
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
              <Form.Input
                label="Enter Email"
                type="text"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
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
              <Button type="submit">Register</Button>
            </Form>
          </Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}
