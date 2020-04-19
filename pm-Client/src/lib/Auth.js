//lib-Auth.js

import React, { Component } from 'react';
import authService from "./auth-service";
const { Consumer, Provider } = React.createContext();


//HOC to create a Consumer
const withAuth = WrappedComponent => {
  return class extends Component {
    render() {
      return (

        <Consumer>
          {
            (value) => {
              return (
                <WrappedComponent
                user={value.user}
                isLoggedin={value.isLoggedin}
                login={value.login}
                signup={value.signuo}
                logout={value.logout}
                admin={value.admin}
                {...this.props}
                />
              );
            }     
          }
        </Consumer>
      ) ;
    }
  };
};



// Provider
class AuthProvider extends React.Component {
  state= {
    isLoggedIn: false,
    user: null,
    isLoading: true
  };

  componentDidMount() {
    authService
    .me()
    .then( user => 
      this.setState({ isLoggedIn:true, user: user, isLoading:false })
    )
    .catch( err => 
      this.setState({ isLoggedIn: false, user: null, isLoading: false })
    );
  }

  signup = (username, email, password) => {
    authService
      .signup({ username, email, password })
      .then(user => this.setState({ isLoggedIn: true, user }))
      .catch(err => console.log(err));  
  };

  login = (email, password) => {
    authService
    .login({ email, password })
    .then(user => this.setState({ isLoggedIn:true, user }))
    .catch(err => console.log(err));
  };

  


  render() {

  /*
  <Provider> `value={}` data will be available to all <Consumer> components 
   */
  }

}



export { withAuth, AuthProvider };

//      Consumer,    Provider