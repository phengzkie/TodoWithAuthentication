import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/UI/Header';
import Dashboard from './components/Dashboard';

const Landing = () => <h2>Landing</h2>;
const DashboardNew = () => <h2>DashboardNew</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/todo" component={Dashboard} />
            <Route path="/todo/new" component={DashboardNew} />
          </div>
        </BrowserRouter>
      </div>
    )
  } 
};

export default connect(null, actions)(App);
