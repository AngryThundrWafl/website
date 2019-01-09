import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import {Router, browserHistory} from 'react-router';
//import Routes from './Routes';
import Routes from './views/';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

//Router version of this application
//ReactDOM.render(
  //<Router history={browserHistory} routes={Routes} />,
  //document.querySelector('#root')
//);

ReactDOM.render(<Routes/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
