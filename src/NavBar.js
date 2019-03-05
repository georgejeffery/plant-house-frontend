import React from "react";

import leafIcon from "./leaf_2.svg";
import { Menu, Container, Image, Button } from "semantic-ui-react";

export default class NavBar extends React.Component {

    render() {
        return(
            <React.Fragment>
                <Menu>
                    <Menu.Item  as='a' header>
                        <Image src={leafIcon} ui={false}/>
                </Menu.Item>
                    <Container >
                        <Menu.Item>
                            <Button>user</Button>
                        </Menu.Item>
                    </Container>
                </Menu>
            </React.Fragment>
        );
    };
};

