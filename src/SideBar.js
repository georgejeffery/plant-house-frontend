import React from "react";
import { Tab, TabPane } from "semantic-ui-react";
import PlantSelector from "./PlantsSelector";
import RoomsContainer from "./RoomsContainer";

export default class SideBar extends React.Component {

    state = {
        userId: null
    };

    static panes = [
        {menuItem: 'Rooms', render: () => <TabPane><RoomsContainer/></TabPane>},
        {menuItem: 'New Room', render: () => <TabPane><PlantSelector/></TabPane>},
    ]

    render(){
        return(
            <Tab menu={{fluid: true, vertical: true, tabular: true}} panes={SideBar.panes} />
        );
    };
}; 