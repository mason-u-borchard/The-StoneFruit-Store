import React from "react";
import AppCards from "./AppCards.jsx";
import Header from "./Header.jsx";

class App extends React.Component {
  render() {
    return (
      <div
        className=" similar-apps container-fluid"
        style={{
          width: "390px",
          width: "390px",
          paddingLeft: "50px",
          paddingRight: "380px",
        }}
      >
        <Header />
        <AppCards />
      </div>
    );
  }
}

export default App;
