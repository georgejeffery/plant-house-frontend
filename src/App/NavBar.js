import React from "react";

import leafIcon from "../ShowPlants/leaf_2.svg";
import { Menu, Container, Image, Button } from "semantic-ui-react";
import { History } from "react-router-dom";

export default class NavBar extends React.Component {
  history = this.props.history;
  handleClick = () => {
    if (this.props.user) {
      this.props.logout();
    } else {
      this.history.push("/login");
    }
  };

  render() {
    return (
      <React.Fragment>
        <Menu>
          <Menu.Item as="a" header>
            <Image src={leafIcon} ui={false} />
          </Menu.Item>
          <Container>
            <Menu.Item>
              <Button onClick={this.handleClick}>
                {this.props.user
                  ? this.props.user.name
                  : "Login / Sign up"}
              </Button>
            </Menu.Item>
          </Container>
        </Menu>
      </React.Fragment>
    );
  }
}
