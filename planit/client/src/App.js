import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ErrPage from './pages/ErrPage';
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <NavBar />
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
