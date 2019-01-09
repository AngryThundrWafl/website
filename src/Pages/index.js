import React from 'react';
import {HashRouter,Route,Link,Switch} from 'react-router-dom';
import About from './About.js';
import Contact from './Contact.js';
import Home from './Home.js';
import Portfolio from './Portfolio.js';
import Skills from './Skills.js';

export default() => (
  <HashRouter>
    <Switch>
      <Route exact path='/About' component={About} />
      <Route exact path='/Contact' component={Contact} />
      <Route exact path='/Portfolio' component={Portfolio} />
      <Route exact path='/Skills' component={Skills} />
      <Route exact path='/' component={Home} />
    </Switch>
  </HashRouter>
);
