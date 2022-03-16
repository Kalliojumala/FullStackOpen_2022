import React from "react";

const Total = ({ total }) => {
  return (
    <div>
      Total exercises:
      {total.reduce((a, b) => {
        return a + b.exercises;
      }, 0)}
    </div>
  );
};

export default Total;
