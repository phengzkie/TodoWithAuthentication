import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/UI/Header';

const Landing = () => <h2>Landing</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const DashboardNew = () => <h2>DashboardNew</h2>;

const App = () => {
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
};

export default App;