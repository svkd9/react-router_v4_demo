import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import { Route, Switch } from 'react-router-dom'
import { Router } from 'react-router'

export const history = createHistory()

function asyncComponent(getComponent) {
  return class AsyncComponent extends React.Component {
    static Component = null;
    state = { Component: AsyncComponent.Component };

    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then(module => module.default).then(Component => {
          AsyncComponent.Component = Component
          this.setState({ Component })
        })
      }
    }
    render() {
      const { Component } = this.state
      if (Component) {
        return <Component {...this.props} />
      }
      return null
    }
  }
}

const Home = asyncComponent(() => import('./Home'))
const Login = asyncComponent(() => import('./Login'))

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
