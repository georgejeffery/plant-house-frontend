import React from "react";

import PlantsContainer from "./PlantsContainer";
import { Segment, Header, Icon, Image, Button } from "semantic-ui-react";
import RoomForm from "./RoomForm";
import API from "./API";
import PlantCard from "./PlantCard";

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
        const plants = this.state.plants.filter(plant => plant !== card.plant)

        this.setState({selectedPlants: [...this.state.selectedPlants, card.plant],
                        plants
                        })
    };

    onClickDeselect = (e, card) => {
        const selectedPlants = this.state.selectedPlants.filter(plant => plant !== card.plant)

        this.setState({
            plants: [...this.state.plants, card.plant],
            selectedPlants
        })
    };

    render(){
        const plants = this.state.selectedPlants.map(plant => {
            return < PlantCard key={plant.latin_name} plant={plant} onClickSelect={this.onClickDeselect}/>
        });

        if (this.state.selectedPlants.lenght) {this.props.handleOnChangeSelection()}
        return(
                   !this.state.selectedPlants.length
                        ? <><Segment placeholder>
                            <Header icon>
                                Tell me more about your room!
                            </Header>
                            <RoomForm handleClickSearch={this.handleClickSearch}/>
                           </Segment>
                           <PlantsContainer plants={this.state.plants} onClickSelect={this.onClickSelect}/></>
                        : <><Segment.Group placeholder horizontal style={{overflow:'auto', whiteSpace:'nowrap', maxHeight:400}}>
                            {plants}
                           </Segment.Group>
                           <PlantsContainer plants={this.state.plants} onClickSelect={this.onClickSelect}/>
                           </>
                
        )
    };
};