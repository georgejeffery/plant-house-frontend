import React, { Component } from 'react';

import 'semantic-ui-css/semantic.min.css'
import { Grid, Menu, Button } from 'semantic-ui-react';
import NavBar from './NavBar';
import PlantSelector from './PlantsSelector';
import SideBar from './SideBar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <SideBar />
      </React.Fragment>
    );
  }
}

export default App;
