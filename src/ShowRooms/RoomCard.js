import React from "react";

import { Card } from "semantic-ui-react";
import roomImg from "./room.jpg";

export default class RoomCard extends React.Component {

    render () {
        const room = this.props.room
        return (
            <Card
                image={roomImg}
                header={room.name}
            >
            </Card>
        );
    };
};