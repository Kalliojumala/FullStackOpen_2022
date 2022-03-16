import React from "react";
import StatLine from "./StatLine";
const Statistics = ({ good, bad, neutral }) => {
  let total = good + bad + neutral;

  return (
    <div>
      <h1>Statistics</h1>
      {total > 0 ? (
        <>
          <table>
            <tbody>
            <tr>
              <StatLine text="Good reviews" value={good} />
            </tr>
            <tr>
              <StatLine text="Neutral reviews" value={neutral} />
            </tr>
            <tr>
              <StatLine text="Bad reviews" value={bad} />
            </tr>
            <tr>
              <StatLine text="Total reviews" value={total} />
            </tr>
            <tr>
              <StatLine
                text="Average (1=Good, -1=Bad)"
                value={(good - bad) / total}
              />
            </tr>
            <tr>
              <StatLine text="Positive reviews" value={(good / total) * 100} />
            </tr>
            </tbody>
          </table>
        </>
      ) : (
        <div>No feedback given</div>
      )}
    </div>
  );
};

export default Statistics;
