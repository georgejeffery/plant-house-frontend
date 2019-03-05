import React from "react";

import { Button, Image, Modal, Dropdown, Grid, Checkbox } from "semantic-ui-react";
import leafIcon from "./leaf_2.svg";

export default class RoomForm extends React.Component {

    state = {
        flower:false,
        light: null,
        humidity: null,
    }

    onChangeTerms = (event, value) => {
        // debugger
        this.setState({[value.name]: value.value})
    };
    render(){
        const optionsLight = [
            {key: 1, text: 'low', value: 'Low'},
            {key: 2, text: 'med', value: 'Medium'},
            {key: 3, text: 'high', value: 'Bright'},
        ];

        const optionsHumidity = [
            {key: 1, text: 'low', value: 'Low'},
            {key: 1, text: 'high', value: 'High'}
        ];

        const { value } = this.state

        return(
            <Modal trigger={<Button ><Image src={leafIcon} avatar /></Button>}>
                <Modal.Header>Select room conditions from dropdowns below</Modal.Header>
                <Modal.Content>
                    <Grid >
                        <Grid.Column width={8}>
                        <Modal.Header>How bright your room is?</Modal.Header>
                        <Dropdown 
                            onChange={this.onChangeTerms}
                            options={optionsLight}
                            placeholder='choose one'
                            name='light'
                            value={value}
                        />
                        </Grid.Column>
                        <Grid.Column width={8}>
                        <Modal.Header>How humid your room is?</Modal.Header>
                        <Dropdown 
                            onChange={this.onChangeTerms}
                            options={optionsHumidity}
                            name='humidity'
                            placeholder=''
                            value={value}
                        />
                        </Grid.Column>
                        <Grid.Column>
                            <Checkbox></Checkbox>
                        </Grid.Column>
                    </Grid>
                </Modal.Content>
            </Modal>

        );
    };
};