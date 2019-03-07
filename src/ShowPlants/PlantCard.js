import React from "react";

import { Card } from "semantic-ui-react";
import leafIcon from "./leaf_2.svg";
import PlantCardBack from "./PlantCardBack";
import PlantCardFront from "./PlantCardFront";

export default class PlantCard extends React.Component {
  state = {
    isClicked: false
  };

  handleClickImage = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };

  render() {
    const plant = this.props.plant;

    return this.state.isClicked ? (
      <PlantCardBack
        header={plant.commonname}
        handleClick={this.handleClickImage}
      />
    ) : (
      <PlantCardFront
        image={plant.image_url}
        {...this.props}
        meta={plant.plant_habit}
        header={plant.commonname ? plant.commonname : plant.latin_name}
        onClickSelect={this.props.onClickSelect}
        style={{ width: 250 }}
      />
    );
  }
}
