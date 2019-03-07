import React from "react";
import { Segment, Header } from "semantic-ui-react";
import RoomCard from "./RoomCard";
import PlantsContainer from "../ShowPlants/PlantsContainer";
import API from "../API";

export default class RoomsContainer extends React.Component {

    state = {
        roomClicked: null,
        rooms:this.props.user.rooms,
        plants:[],
    };

    handleRoomSelect = (roomClicked) => {
        this.setState({ roomClicked }, () => this.updatePlants());

    }; 

    updatePlants = () => {
            API.getRoom(this.state.roomClicked.id)
                .then(room => this.setState({plants: room.plants}))
    };

    render () {

        const roomRender = () => {
            if (this.state.roomClicked) {
                // debugger
                return <PlantsContainer plants={this.state.plants}/>
            }
            else {
                return (this.state.rooms.length
                    ? <Segment.Group horizontal style={{overflow:'auto', whiteSpace:'nowrap', minHeight:'80vh'}}>
                        {this.state.rooms.map(room => <RoomCard handleRoomSelect={this.handleRoomSelect} key={room.name} room={room}/>)}
                      </Segment.Group> 
                    : <Segment placeholder style={{minHeight: '80vh'}}>
                         <Header icon>It looks like you don't have any... yet!</Header>
                     </Segment>)
            };
            };
        

        return (
            <>
                {roomRender()}
            </>

        );
    };
};