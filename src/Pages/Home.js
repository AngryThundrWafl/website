import React, { Component } from "react";
import NavBar from '../components/NavBar.js';

class Home extends Component{
  render() {
    return(
      <div id="home">
        This is the home page.
        <NavBar/>
      </div>
    );
  }
}

export default Home;
