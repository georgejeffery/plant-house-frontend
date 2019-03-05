import React from "react";

import { Card, Image } from "semantic-ui-react";
import leafIcon from "./leaf_2.svg";


export default class PlantCardFront extends React.Component {

    render() {
        const { image, header, meta } = this.props

        return (
            <Card
                {...this.props}
                onClick={this.props.onClickSelect}
                image={image || PlantCardFront.defaultProps.image}
                header={header || PlantCardFront.defaultProps.header}
                meta={meta || PlantCardFront.defaultProps.meta}
            />
         
        );
    }; 

    static defaultProps = {
            image: leafIcon,
            header: "I Don't know my name",
            meta: "I don't have a type"
    };
};

