import React from "react";
import lottie from "lottie-web";
import animationData from "./car.json";
import "./App.css";

let animObj = null;

class App extends React.Component {
  componentDidMount() {
    console.log("componentDidMount");

    // Call the loadAnimation to start the animation
    animObj = lottie.loadAnimation({
      container: this.animBox, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData, // the path to the animation json
    });
  }

  handleStop = () => {
    animObj.stop();
  };

  handlePlay = () => {
    animObj.play();
  };

  render() {
    return (
      <div className="App">
        <div
          className="App-animation"
          ref={(ref) => (this.animBox = ref)}
        ></div>
        <div className="App-buttons_wrapper">
          <div className="App-button" onClick={this.handleStop}>
            Stop
          </div>
          <div className="App-button" onClick={this.handlePlay}>
            Play
          </div>
        </div>
      </div>
    );
  }
}

export default App;
