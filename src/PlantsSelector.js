import React from "react";

import PlantsContainer from "./PlantsContainer";
import { Segment, Header, Icon, Image, Button } from "semantic-ui-react";
import RoomForm from "./RoomForm";
import API from "./API";

export default class PlantSelector extends React.Component {

    state = {
        plants: [],
        selectedPlants: [],
    };

    handleClickSearch = (search) => {
        API.searchPlants(search)
            .then(plants => {
                this.setState({ plants })
            })
    };

    onClickSelect = (e, card) => {
        this.setState({selectedPlants: [...this.state.selectedPlants, card.plant.id]})
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
                <PlantsContainer plants={this.state.plants} onClickSelect={this.onClickSelect}/>
            </div>
        )
    };
};