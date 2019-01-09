import React from 'react';
import {Router,IndexRoute} from 'react-router';
import About from './views/About.js';
import App from './App.js';
import Contact from './views/Contact.js';
import Home from './views/Home.js';
import Portfolio from './views/Portfolio.js';
import Skills from './views/Skills.js';

export default(
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='About' component={About} />
    <Route path='Contact' component={Contact} />
    <Route path='Portfolio' component={Portfolio} />
    <Route path='Skills' component={Skills} />
    <Route path='*' component={Home} />
  </Route>
);
