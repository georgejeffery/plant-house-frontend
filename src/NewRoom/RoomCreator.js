import React from "react";

import PlantsContainer from "../ShowPlants/PlantsContainer";
import { Segment, Header, Icon, Image, Button, ButtonContent } from "semantic-ui-react";
import RoomForm from "./RoomForm";
import API from "../API";
import PlantCard from "../ShowPlants/PlantCard";

export default class RoomCreator extends React.Component {

    state = {
        plants: [],
        selectedPlants: [],
        roomParams: null,
    };

    handleClickSearch = (search) => {
        API.searchPlants(search)
            .then(plants => {
                this.setState({ plants, roomParams: search })
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

    

    handleSubmitRoom = () => {
        API.createRoom({...this.state.roomParams, plants: this.state.selectedPlants, user_id: this.props.user.id})
            .then(resp => console.log(resp))
    };

    render(){
        const plants = this.state.selectedPlants.map(plant => {
            return < PlantCard key={plant.latin_name} plant={plant} onClickSelect={this.onClickDeselect}/>
        });

        return(
                   !this.state.selectedPlants.length
                        ? <><Segment placeholder>
                            <Header icon>
                                Tell me more about your room!
                            </Header>
                            <RoomForm handleClickSearch={this.handleClickSearch} />
                           </Segment>
                           <PlantsContainer plants={this.state.plants} onClickSelect={this.onClickSelect}/></>
                        : <><Segment.Group horizontal style={{overflow:'auto', whiteSpace:'nowrap', maxHeight:400}}>
                            {plants}
                           </Segment.Group>
                           {this.state.selectedPlants.length && <Button onClick={this.handleSubmitRoom}>Submit</Button>}
                           <PlantsContainer plants={this.state.plants} onClickSelect={this.onClickSelect}/>
                           </>
                
        )
    };
};