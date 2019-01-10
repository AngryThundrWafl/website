import React, { Component } from 'react';
import NavBar from '../components/NavBar.js';
import '../stylesheets/main.css'
import '../stylesheets/normalize.css'

class Portfolio extends Component{
  render(){
    return(
      <div id='portfolio'>
        <NavBar/>
      </div>
    );
  }
}

export default Portfolio;
