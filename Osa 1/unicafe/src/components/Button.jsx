import React from "react";

const Button = ({ handleChange, targetState }) => {
  return (
    <div style={{ padding: 5 }}>
      <button onClick={() => handleChange(targetState)}>{targetState}</button>
    </div>
  );
};

export default Button;
