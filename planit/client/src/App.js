import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router';
import './App.css';
import HomePage from './pages/HomePage';
import ErrPage from './pages/ErrPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route component={ErrPage} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
