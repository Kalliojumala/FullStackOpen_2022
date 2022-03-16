import React, { useState } from "react";
import Statistics from "./components/Statistics";
import StatLine from "./components/StatLine";
import Button from "./components/Button";
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  console.log("Refresh!");
  const handleChange = (target) => {
    if (target === "Good") {
      return () => setGood(good + 1);
    } else if (target === "Neutral") {
      return () => setNeutral(neutral + 1);
    } else if (target === "Bad") {
      return () => setBad(bad + 1);
    }
  };

  return (
    <div className="App">
      <h1>Give Feedback</h1>
      {/*Buttons start */}
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Button handleChange={handleChange} targetState={"Good"}/>
        <Button handleChange={handleChange} targetState={"Neutral"}/>
        <Button handleChange={handleChange} targetState={"Bad"}/>
      </div>
      {/*Buttons End */}

      {/*Statistics*/}
      
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        /> 
    </div>
  );
}

export default App;
