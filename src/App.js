import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Create from './components/Create';
import Index from './components/Index';

class App extends Component {
  render() {
    return (
      <div className="container">
        <ul>
          <li><Link to={'/create'}>Create</Link></li>
          <li><Link to={'/index'}>List</Link></li>
        </ul>
        <hr />
        <Switch>
          <Route exact path='/create' component={ Create } />
          <Route path='/index' component={ Index } />
        </Switch>
      </div>
    );
  }
}

export default App;
