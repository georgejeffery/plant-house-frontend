import React from "react";

import leafIcon from "../ShowPlants/leaf_2.svg";
import { Menu, Container, Image, Button } from "semantic-ui-react";
import { History } from "react-router-dom";

export default class NavBar extends React.Component {
  buttongroup = () => {
    return (
      <Button.Group vertical>
        <Button onClick={this.props.logout}>Logout</Button>
      </Button.Group>
    );
  };
  history = this.props.history;
  handleClick = () => {
    if (this.props.user) {
      this.props.logout();
    } else {
      this.history.push("/");
    }
  };

  mainLink=()=>this.history.push("/main")

  render() {
    return (
      <React.Fragment>
        <Menu>
          <Menu.Item as="a" header onClick={this.mainLink}>
            <Image src={leafIcon} ui={false} />
          </Menu.Item>
            <Menu.Item position='right'>
              {this.props.user ? (
                <Button animated onClick={this.handleClick}>
                  <Button.Content visible>
                    {this.props.user.name}
                  </Button.Content>{" "}
                  <Button.Content hidden>Logout</Button.Content>
                </Button>
              ) : (
                <Button>
                  <Button.Content visible>Login / Sign up</Button.Content>
                </Button>
              )}
            </Menu.Item>
        </Menu>
      </React.Fragment>
    );
  }
}
