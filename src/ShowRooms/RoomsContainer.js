import React from "react";
import { Segment, Header } from "semantic-ui-react";
import RoomCard from "./RoomCard";

export default class RoomsContainer extends React.Component {

    state = {
        RoomClicked: null
    };

    render () {

        return(
            <>
            {this.props.rooms
               ? <Segment>
                   {this.props.rooms.map(room => <RoomCard key={room.name} room={room}/>)}
                 </Segment> 
               : <Segment placeholder>
                    <Header icon>It looks like you don't have any... yet!</Header>
                </Segment>}
            </>

        );
    };
};