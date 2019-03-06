import React from "react";
import { Tab, TabPane, Button } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import RoomCreator from "../NewRoom/RoomCreator";
import RoomsContainer from "../ShowRooms/RoomsContainer";

export default class SideBar extends React.Component {
  panes = [
    {
      menuItem: "Rooms",
      render: () => (
        <TabPane>
          <RoomsContainer rooms={this.props.user.rooms} />
        </TabPane>
      )
    },
    {
      menuItem: "New Room",
      render: () => (
        <TabPane>
          <RoomCreator />
        </TabPane>
      )
    }
  ];

  render() {
    return this.props.user ? (
      <Tab
        grid={{ tabWidth: 2, paneWidth: 14 }}
        menu={{ fluid: true, vertical: true, tabular: true }}
        panes={this.panes}
      />
    ) : (
      <Redirect to="/" />
    );
  }
}
