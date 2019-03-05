import React from "react";

import { Button, Image, Modal, Dropdown, Container, Checkbox, Grid } from "semantic-ui-react";
import leafIcon from "./leaf_2.svg";

export default class RoomForm extends React.Component {

    state = {
        flower:false,
        light: null,
        humidity: null,
        open: false,
    }

    onChangeTerms = (event, value) => {
        // debugger
        this.setState({[value.name]: value.value})
    };

    onToggle = () => {
        this.setState({flower: !this.state.flower});
    };
    render(){
        const optionsLight = [
            {key: 1, text: 'low', value: 'low'},
            {key: 2, text: 'med', value: 'medium'},
            {key: 3, text: 'high', value: 'bright'},
        ];

        const optionsHumidity = [
            {key: 1, text: 'low', value: 'low'},
            {key: 2, text: 'high', value: 'high'}
        ];

        const { value } = this.state

        return(
            <Modal 
                trigger={<Button ><Image src={leafIcon} /></Button>} 
                size='mini'
                open={this.state.open}
                onOpen={() => this.setState({open:true})}
                >
                <Modal.Header>Select room conditions from dropdowns below</Modal.Header>
                <Modal.Content>
                    <Grid>
                        <Grid.Row>
                        <Modal.Header>How bright your room is?</Modal.Header>
                        <Dropdown 
                            onChange={this.onChangeTerms}
                            options={optionsLight}
                            placeholder='choose one'
                            name='light'
                            value={value}
                        />
                        </Grid.Row>
                        <Grid.Row>
                        <Modal.Header>How humid your room is?</Modal.Header>
                        <Dropdown 
                            onChange={this.onChangeTerms}
                            options={optionsHumidity}
                            name='humidity'
                            placeholder='choose one'
                            value={value}
                        />
                        </Grid.Row>
                        <Grid.Row>
                        <Checkbox label ='Would you fancy some flowers with your plants?' onChange={this.onToggle} checked={this.state.flower}></Checkbox>
                        </Grid.Row>
                    </Grid>
                </Modal.Content>
                <Modal.Actions>
                        <Button primary onClick={() => {this.props.handleClickSearch(this.state); this.setState({open: false})}}>Submit</Button>
                </Modal.Actions>
            </Modal>

        );
    };
};