import React, { Component } from 'react';
import Home from './Home'
import Login from './Login'
import createHistory from 'history/createBrowserHistory';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export const history = createHistory()

class App extends Component {
  render() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route exact path="/" component={Home}/>
            </Switch>
        </Router>
    );
  }
}

export default App;
