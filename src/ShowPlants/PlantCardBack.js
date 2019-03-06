import React from "react";

import { Card } from "semantic-ui-react";
import leafIcon from "./leaf_2.svg";


export default class PlantCardBack extends React.Component {

    render() {
        const { image, header, meta } = this.props
        // debugger

        return (
            <Card
                onClick={this.props.handleClick}
                header={header || PlantCardBack.defaultProps.header}
                meta={meta || PlantCardBack.defaultProps.meta}
            />
         
        );
    }; 

    static defaultProps = {
            image: leafIcon,
            header: "I Don't know my name",
            meta: "I don't have a type"
    };
};