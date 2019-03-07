import React from "react";

import {
  Button,
  Image,
  Modal,
  Dropdown,
  Checkbox,
  Grid,
  Message,
  Input,
  GridColumn
} from "semantic-ui-react";
import leafIcon from "../ShowPlants/leaf_2.svg";

export default class RoomForm extends React.Component {
  state = {
    flowers: false,
    light: null,
    humidity: null,
    name: null,
    open: false
  };

  onChangeTerms = (e, value) => {
    // debugger
    this.setState({ [value.name]: value.value });
  };

  validateState = () => {
    if (this.state.light && this.state.humidity) {
      return (
        <Button
          primary
          onClick={() => {
            this.props.handleClickSearch(this.state);
            this.setState({ open: false });
          }}
        >
          Submit
        </Button>
      );
    } else {
      return <Message>Need to pick from all dropdowns</Message>;
    }
  };

  onToggle = () => {
    this.setState({ flowers: !this.state.flowers });
  };

  render() {
    const optionsLight = [
      { key: 1, text: "low", value: "low" },
      { key: 2, text: "med", value: "medium" },
      { key: 3, text: "high", value: "bright" }
    ];

    const optionsHumidity = [
      { key: 1, text: "low", value: "low" },
      { key: 2, text: "high", value: "high" }
    ];

    const { value } = this.state;

    return (
      <Modal
        trigger={
          <Button>
            <Image src={leafIcon} size="mini" />
          </Button>
        }
        size="mini"
        open={this.state.open}
        onOpen={() => this.setState({ open: true })}
      >
        <Modal.Header>Select room conditions from dropdowns below</Modal.Header>
        <Modal.Content>
          <Grid>
            <Grid.Row>
              <Input
                placeholder="Name me..."
                name="name"
                value={value}
                onChange={this.onChangeTerms}
              />
            </Grid.Row>
            <Grid.Row>
              <Modal.Header style={{ "margin-right": 10 }}>
                How bright is your room?
              </Modal.Header>
              <Dropdown
                onChange={this.onChangeTerms}
                options={optionsLight}
                placeholder="Choose one"
                name="light"
                value={value}
              />
            </Grid.Row>
            <Grid.Row>
              <Modal.Header style={{ "margin-right": 10 }}>
                How humid is your room?
              </Modal.Header>
              <Modal.Content>
                <Dropdown
                  onChange={this.onChangeTerms}
                  options={optionsHumidity}
                  name="humidity"
                  placeholder="Choose one"
                  value={value}
                />
              </Modal.Content>
            </Grid.Row>
            <Grid.Row>
              <Checkbox
                label="Would you like your plants to have flowers?"
                onChange={this.onToggle}
                checked={this.state.flower}
              />
            </Grid.Row>
          </Grid>
        </Modal.Content>
        <Modal.Actions content={this.validateState()} />
      </Modal>
    );
  }
}
