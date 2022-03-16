import React from "react";

const StatLine = ({ text, value }) => {
  return (
    <>
      <td>{text}</td>
      <td>
        {value}
        {text == "Positive reviews" ? "%" : null}
      </td>
    </>
  );
};

export default StatLine;
