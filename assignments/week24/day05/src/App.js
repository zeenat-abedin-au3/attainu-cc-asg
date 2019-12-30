import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllDetails } from './actions/actionDetails'
import Home from './components/Home'

class App extends Component {
  componentDidMount() {
    this.props.fetchAllDetails()
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar">
          <p className="lead text-center">Posts</p>
        </nav>
        <Home />
      </div>
    )
  }
}

export default connect(null, { fetchAllDetails })(App)
