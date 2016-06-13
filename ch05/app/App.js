/**
 * Created by ES-PC on 2016-04-23.
 */
import React, { Component } from 'react';
import{ render } from 'react-dom';

import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

import About from './About';
import Home from './Home';
import Repos from './Repos';


class App extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            route: window.location.hash.substr(1)
        };
    }
       
 
    render() {     
      return (
        <div>
          <header>App</header>
          <menu>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/repos">Repos</Link></li>
            </ul>
          </menu>
          {this.props.children}
        </div>
      )
    }
}
// <IndexRoute component={Home} />
render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About}/>
      <Route path="repos" component={Repos}/>
    </Route>
  </Router>
), document.getElementById('root'));