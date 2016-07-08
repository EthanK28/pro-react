/**
 * Created by ES-PC on 2016-04-23.
 */
import React, { Component } from 'react';
import{ render } from 'react-dom';

import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import About from './About';
import Home from './Home';
import Repos from './Repos';
import RepoDetails from './RepoDetails';
import ServerError from './ServerError';

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
              <li><Link to="/about" activeClassName="active">About</Link></li>
              <li><Link to="/repos" activeClassName="active">Repos</Link></li>
            </ul>
          </menu>
          {this.props.children}
        </div>
      )
    }
}
// <IndexRoute component={Home} />
render((
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About} title="About USS"/>
      <Route path="repos" component={Repos}>
        {/* Add the route, nested where we want the UI to nest */}
        <Route path="/repo/:repo_name" component={RepoDetails} />
      </Route>
      <Route path="error" component={ServerError} />
    </Route>
  </Router>
), document.getElementById('root'));