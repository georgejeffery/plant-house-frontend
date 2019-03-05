import React from "react";
import { Tab, TabPane, Button } from "semantic-ui-react";
import PlantSelector from "./PlantsSelector";
import RoomsContainer from "./RoomsContainer";

export default class SideBar extends React.Component {

    state = {
        userId: null,
        plantsSelected: false,
    };

    panes = [
        {menuItem: 'Rooms', render: () => <TabPane><RoomsContainer/></TabPane>},
        {menuItem: `${this.state.plantsSelected ? <Button>test</Button> : 'New Room'}`, render: () => <TabPane><PlantSelector handleOnChangeSelection={this.handleOnChangeSelection}/></TabPane>
        },
    ];

    handleOnChangeSelection = () => {
        this.setState({plantsSelected: !this.state.plantsSelected})
    };

    render(){
        return(
            <Tab grid={{tabWidth: 2, paneWidth: 14}} menu={{fluid: true, vertical: true, tabular: true}} panes={this.panes} />
        );
    };
}; 