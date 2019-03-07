import React from "react";

import { Card, Image } from "semantic-ui-react";
import leafIcon from "./leaf_2.svg";

export default class PlantCardFront extends React.Component {
  render() {
    const { image, header, meta } = this.props;

    return (
      <Card { ...this.props } style={{ margin: 10 }} onClick={this.props.onClickSelect}>
        <Image
          src={image || PlantCardFront.defaultProps.image}
          style={{ height: 250, "object-fit": "cover" }}
        />
        <Card.Content style={{ width: 250 }}>
          <Card.Header style={{ "white-space": "initial" }}>
            {header || PlantCardFront.defaultProps.header}
          </Card.Header>
          <Card.Meta>{meta || PlantCardFront.defaultProps.meta}</Card.Meta>
        </Card.Content>
      </Card>
    );
  }

  static defaultProps = {
    image: leafIcon,
    header: "I Don't know my name",
    meta: "I don't have a type"
  };
}
