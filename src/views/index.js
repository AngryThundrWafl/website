import React from 'react';
import {HashRouter,Route,Link,Switch} from 'react-router-dom';
import About from './views/About.js';
import App from './App.js';
import Contact from './views/Contact.js';
import Home from './views/Home.js';
import Portfolio from './views/Portfolio.js';
import Skills from './views/Skills.js';

export default(
  //<Route path='/' component={App}>
    //<IndexRoute component={Home} />
    //<Route path='About' component={About} />
    //<Route path='Contact' component={Contact} />
    //<Route path='Portfolio' component={Portfolio} />
    //<Route path='Skills' component={Skills} />
    //<Route path='*' component={Home} />
  //</Route>
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
