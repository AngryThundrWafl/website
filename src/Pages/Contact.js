import React, { Component } from 'react';
import NavBar from '../components/NavBar.js';
import '../stylesheets/main.css'
import '../stylesheets/normalize.css'

class Contact extends Component{
  render(){
    return(
      <div id='contact'>
        <NavBar/>
      </div>
    );
  }
}

export default Contact;
