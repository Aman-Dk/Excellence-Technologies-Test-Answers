import React, { Component } from 'react'
import Todo from './todo/Todo'
import Display from './paging/Display'
import { Route, Switch, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        {/* Todo app */}
        <Todo/>

        {/* UserBook with list of users */}
        <Switch>
          <Route exact path="/" component={() => <Display page="1"/>} />
          <Route exact path="/Page2" component={() => <Display page="2"/>} />
        </Switch>

        {/* page links */}
        <div className="mb-5">
          <Link
            to="/"
            className="btn btn-primary"
            style={{ position: 'relative', left: '44%', top: '10px', }}>
            Page 1
          </Link>
          <Link
            to="/Page2"
            className="btn btn-primary"
            style={{ position: 'relative', left: '45%', top: '10px', }}>
            Page 2
          </Link>
        </div>
      </div>
    )
  }
}


export default App