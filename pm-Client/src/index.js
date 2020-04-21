import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from "./lib/Auth";
import App from './App';
import * as serviceWorker from './serviceWorker';


import './index.css';


ReactDOM.render((
<Router>
  <AuthProvider>
    <App />
  </AuthProvider>   
</Router> 
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA<App />
serviceWorker.unregister();
