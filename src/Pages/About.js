import React, { Component } from 'react';
import NavBar from '../components/NavBar.js';
import '../stylesheets/main.css'
import '../stylesheets/normalize.css'

class About extends Component{
  render(){
    return(
      <div id='about'>
        <NavBar/>
      </div>
    );
  }
}

export default About;
