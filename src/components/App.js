import React, { Component } from 'react';
import css from '../styles/App.css';

import Route2Component from './Route2Component.js';
import Route1Component from './Route1Component.js';
import Route3Component from './Route3Component.js';
import Route4Component from './Route4Component.js';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <div className="container">
            <ul>
              <li><Link to="/route1">Route1</Link></li>
              <li><Link to="/route2">Route2</Link></li>
              <li>
                <Link to="/route3">Route3</Link>
              </li>
              <li>
                <Link to="/route4">Route4</Link>
              </li>
            </ul>
            <hr/>

          <Switch>
            <Route exact path="/" component={Route1Component} />
            <Route path="/route2" component={Route2Component} />
            <Route path="/route3" component={Route3Component} />
            <Route path="/route4" component={Route4Component} />
          </Switch>

          </div>
        </div>
      </Router>
    );
  }
}


export default App;
