// components/navbar/Navbar.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Higher from '../hoc/Higher.js';
import { withAuth } from '../../lib/Auth.js';

class Navbar extends Component {
  state = {
    showSearchBar: true
  }

  render() {
    const {
      user,
      logout,
      isLoggedIn
    } = this.props;
    return (
      <nav className = "navbar" id = "navBar"role = "navigation" >
        <ul id="menu">
          <Link to="/"  className="nav-btn">
            <li>Home</li>
          </Link>
          <Link to="/projects" className="nav-btn" id="navbar-links">
            <li>Projects</li>
          </Link>

          {isLoggedIn && !user.isAdmin ? (
              <>
                <Link to={"/profilePage"} className="nav-btn" onClick={this.hideMenuOnClick}>
                  <li>Profile</li>
                </Link>

                <p>username: {user.username}</p>
                <button onClick={this.logoutAndHide}>Logout</button>

                <Link
                  to={"/projects"}
                  className="nav-btn"
                  onClick={this.hideMenuOnClick}
                >
                  <h4>My Projects</h4>
                </Link>
              </>
            ) : (
              <>          
              </>
            )}

            {!isLoggedIn ? (
              <>
              <Link to="/login">
                  <button className="navbar-button" >Login</button>{" "}
                </Link>
                <br />
                <Link to="/signup">
                  <button className="navbar-button">
                    Sign Up
                  </button>{" "}
                </Link>
              </>
            ) : (
              <>
              </>
            )} 
        </ul>
      </nav>
    )
  }
};

export default withAuth(Navbar);
