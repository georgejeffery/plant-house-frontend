import React from "react";

import { Card } from "semantic-ui-react";
import roomImg from "./room.jpg";

export default class RoomCard extends React.Component {

    render () {
        const room = this.props.room
        return (
            <Card
                onClick={() => this.props.handleRoomSelect(room)}
                image={roomImg}
                header={room.name}
                style={{minWidth: 300,
                        margin: 10,
                        }}
            />
            
        );
    };
};