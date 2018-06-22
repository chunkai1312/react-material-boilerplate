import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route } from 'react-router-dom'
import Home from './home/Home'
import About from './about/About'

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      {/* NOTE: put other app routes here */}
    </Switch>
  </ConnectedRouter>
)

App.propTypes = {
  history: PropTypes.object
}

export default App
