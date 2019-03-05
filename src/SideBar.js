import React from "react";
import { Tab, TabPane } from "semantic-ui-react";
import PlantSelector from "./PlantsSelector";

export default class SideBar extends React.Component {
    static panes = [
        {menuItem: 'Rooms'},
        {menuItem: 'New Room', render: () => <TabPane><PlantSelector/></TabPane>},
    ]
    
    render(){
        return(
            <Tab menu={{fluid: true, vertical: true, tabular: true}} panes={SideBar.panes} />
        );
    };
}; 