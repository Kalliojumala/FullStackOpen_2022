import React from 'react'
import Header from './Header';
import Content from './Content';

const Course = ({ courses }) => {
    
  return (
    <div>
        {courses.map((course) => (
        <div key={course.name}>
        <Header  text={course.name}/>
        <Content courses={course.parts}/>
        </div>
        )
        )}
        


    </div>
  )
}

export default Course