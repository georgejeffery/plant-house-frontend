import React from "react";
import { Tab, TabPane, Button } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import RoomCreator from "../NewRoom/RoomCreator";
import RoomsContainer from "../ShowRooms/RoomsContainer";
import API from "../API";

export default class SideBar extends React.Component {

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

  clearRoomClicked = () => {
    this.setState({roomClicked: null})
  }

  panes = [
    {
      menuItem: "Rooms",
      render: () => {        
        return (
          <TabPane>
          <RoomsContainer
            plants={this.state.plants}
            roomClicked={this.state.roomClicked}
            rooms={this.state.rooms}
            handleRoomSelect={this.handleRoomSelect}
            user={this.props.user} />
        </TabPane>
      )}
    },
    {
      menuItem: "New Room",
      render: () => (
        <TabPane>
          <RoomCreator updateRoomState={this.props.updateRoomState} user={this.props.user}/>
        </TabPane>
      )
    }
  ];


  render() {
    return this.props.user ? (
      <Tab
        onTabChange={this.clearRoomClicked}
        grid={{ tabWidth: 2, paneWidth: 14 }}
        menu={{ fluid: true, vertical: true, tabular: true }}
        panes={this.panes}
      />
    ) : (
      <Redirect to="/" />
    );
  }
}
