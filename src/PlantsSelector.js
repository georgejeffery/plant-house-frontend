import React from "react";

import PlantsContainer from "./PlantsContainer";
import { Segment, Header, Icon, Image, Button } from "semantic-ui-react";
import leafIcon from "./leaf_2.svg";
import RoomForm from "./RoomForm";

export default class PlantSelector extends React.Component {

    state = {
        plants: [1]
    };

    handleClickSearch = () => {

    };

    render(){
        return(
            <div>
                <Segment placeholder>
                    <Header icon>
                        Tell me more about your room!
                    </Header>
                    <RoomForm handleClickSearch={this.handleClickSearch}/>
                </Segment>
                <PlantsContainer plants={this.state.plants}/>
            </div>
        )
    };
};