import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "./car.json";
import "./App.css";

let animObj = null;

// class App extends React.Component {
const App = () => {
  const animationRef = useRef();

  useEffect(() => {
    // Call the loadAnimation to start the animation
    animObj = lottie.loadAnimation({
      container: animationRef.current, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData, // the path to the animation json
    });
  }, []);

  const handleStop = () => {
    animObj.stop();
  };

  const handlePlay = () => {
    animObj.play();
  };

  return (
    <div className="App">
      <div className="App-animation" ref={animationRef}></div>
      <div className="App-buttons_wrapper">
        <div className="App-button" onClick={handleStop}>
          Stop
        </div>
        <div className="App-button" onClick={handlePlay}>
          Play
        </div>
      </div>
    </div>
  );
};

export default App;
