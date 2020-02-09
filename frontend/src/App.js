import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import CreateUser from './components/users/create-user.component';
import EditUser from './components/users/edit-user.component';
import UsersList from './components/users/users-list.component';

import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="localhost:3000">
              <img src={logo} width="30" height="30" alt="Qualidade" />
            </a>
            <Link to="/" className="navbar-brand">Tamoios - Qualidade</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Usuarios</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Criar Usuarios</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={UsersList} />
          <Route path="/edit/:id" component={EditUser} />
          <Route path="/create" component={CreateUser} />
        </div>
      </Router>
    );
  }
}


export default App;
