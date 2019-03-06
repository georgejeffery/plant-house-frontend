import React from "react";
import { Segment, Header } from "semantic-ui-react";

export default class RoomsContainer extends React.Component {

    render () {
        // const rooms = this.props.rooms.map()
        return(
            this.props.rooms
               ? <Segment>
                   {}
                 </Segment> 
               : <Segment placeholder>
                    <Header icon>It looks like you don't have any  yet!</Header>
                </Segment>

        );
    };
};