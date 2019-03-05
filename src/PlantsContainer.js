import React from "react";

import { Segment } from "semantic-ui-react";
import PlantCard from "./PlantCard";

export default class PlantsContainer extends React.Component {


    render() {
        const plants = this.props.plants.map(plant => < PlantCard key={plant.latin_name} plant={plant} onClickSelect={this.props.onClickSelect}/>)
        
        return (
             this.props.plants
            ?
            <Segment placeholder></Segment>
            :
            <Segment.Group horizontal style={{overflow:'auto', whiteSpace:'nowrap', maxHeight:400}}>
                {plants}
            </Segment.Group>
        );
    }

    
};