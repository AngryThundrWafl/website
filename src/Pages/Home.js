import React, { Component } from "react";
import NavBar from '../components/NavBar.js';
import '../stylesheets/main.css'
import '../stylesheets/normalize.css'

class Home extends Component{
  render() {
    return(
      <div id="home">
        <NavBar/>
      </div>
    );
  }
}

export default Home;
