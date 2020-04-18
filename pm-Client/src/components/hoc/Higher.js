import React from "react";
import axios from "axios";

// function component
function Higher(WrappedComponent) {
  // DATA OR FUNCTIONALITY TO INJECT  //
  const userData = { username: "Bob" };
  const color = "";
  const getData = () => {
    return axios.get("https://api.chucknorris.io/jokes/random");
  };
  /////////////////////////////////////

  // Return a new enhanced function component

  return function(props) {
    return (
      <WrappedComponent
        {...props}
        getData={getData}
        userData={userData}
        color={color}
      />
    );
  };
}

export default Higher;
