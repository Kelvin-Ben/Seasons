// import { render } from "@testing-library/react";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errormessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errormessage: err.message })
    );
  }
  renderContent() {
    if (this.state.errormessage && !this.state.lat) {
      return <div>Error: {this.state.errormessage}</div>;
    }
    if (!this.state.errormessage && this.state.lat) {
      return <SeasonDisplay lat = {this.state.lat} />;
    }
    return <Spinner message = 'Please accept location request'/>;
  }
      render() {
        return (
          <div className="border red">{this.renderContent()}</div>
        )
      }
}
ReactDOM.render(<App />, document.querySelector("#root"));



// class Clock extends React.Component {
//   state = {time: new Date().toLocaleTimeString()};
//   componentDidMount() {
//     setInterval(() => {
//       this.setState({time: new Date().toLocaleTimeString()}, 1000)
//     })
//   }
//   render() {
//     return (
//       <div className="time">
//         The time is: {this.state.time}
//       </div>
//     )
//   }
// }