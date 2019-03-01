import React from "react";

import leafIcon from "./leaf_2.svg";
import { Menu, Container, Image, Icon } from "semantic-ui-react";

export default class NavBar extends React.Component {

    render() {
        return(
            <Menu size='tiny'>
                <Container>
                    <Menu.Item>
                    <Image size='tiny' src={leafIcon}/>
                    </Menu.Item>
                </Container>
            </Menu>
        );
    };
};