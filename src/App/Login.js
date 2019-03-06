import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { Form, Button, Grid } from "semantic-ui-react";

export default class Login extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Grid textAlign="center">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form className="login-form">
              <Form.Input label="Enter Username" type="text" />
              <Form.Input label="Enter Password" type="password" />
              <Button type="submit">Submit</Button>
            </Form>
            <Link to="/register">Not registered yet? Do that here!</Link>
          </Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}
