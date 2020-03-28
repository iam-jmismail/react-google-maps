import React, { Component, Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import Chennai from "./components/Chennai";

// Home Component
class Home extends Component {
  render() {
    console.log(process.env.REACT_APP_TEST);

    return (
      <Fragment>
        <Container className='py-4'>
          <h2 className='text-secondary'> Google Maps</h2>
          <p>Choose your city: </p>
          <Link to='/chennai' className='btn btn-dark'>
            Chennai
          </Link>
        </Container>
      </Fragment>
    );
  }
}

// Main Component
export class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Route exact path='/' component={Home} />
          <Route exact path='/chennai' component={Chennai} />
        </Router>
      </Fragment>
    );
  }
}

export default App;
