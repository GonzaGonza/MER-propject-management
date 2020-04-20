//	src/App.js
import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
// import projects from "../../pm-Server/helpers/middleware"

import Navbar from './components/navbar/Navbar';
// import Home from './components/Home.js';
import Login from './components/Login';
import Signup from './components/Signup';

import AnonRoute from "./components/AnonRoute";
import PrivateRoute from './components/PrivateRoute';
import ProjectList from './components/projects/ProjectList';
import ProjectDetails from './components/projects/ProjectDetails';
import TaskDetails from './components/tasks/TaskDetails'


class App extends Component {
  

  render() {
    return (
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/projects" component={ProjectList}/>
          <Route exact path="/projects/:id" component={ProjectDetails} />
          <Route exact path="/projects/:id/tasks/:taskId" component={TaskDetails} /> 
        </Switch>
      </div>
    );
  }
}

export default App;