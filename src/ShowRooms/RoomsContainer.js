import React from "react";
import { Segment, Header } from "semantic-ui-react";
import RoomCard from "./RoomCard";
import PlantsContainer from "../ShowPlants/PlantsContainer";
import API from "../API";

export default class RoomsContainer extends React.Component {
 
    render () {

        const roomRender = () => {
            if (this.props.roomClicked) {
                // debugger
                return <PlantsContainer plants={this.props.plants}/>
            }
            else {
                return (this.props.rooms.length
                    ? <Segment.Group horizontal style={{overflow:'auto', whiteSpace:'nowrap', minHeight:'80vh'}}>
                        {this.props.rooms.map(room => <RoomCard handleRoomSelect={this.props.handleRoomSelect} key={room.name} room={room}/>)}
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