import React from "react";
import Part from "./Part";
const Content = ({ courses }) => {

  let total_exercises = courses.reduce((a,b) => {
      return a + b.exercises
  }, 0)
  
  return (
    <>
      {courses.map((item) => (
        <Part key={item.id} item={item} />
      ))}
      <div style={{ fontWeight: 'bold'}}>
          Total exercises: {total_exercises}
      </div>
    </>
  );
};

export default Content;
