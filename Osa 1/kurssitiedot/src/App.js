
import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';


const App = () => {
  const course = {
  name:  'Half Stack application development',
  content: [
    {
      part :'Fundamentals of React',
      exercises: 10,
    },
    {
      part: 'Using props to pass data',
      exercises: 7
    },
    {
    part: 'State of a component',
    exercises: 14,
    }
  ]
  }

  
  
  return (
    <div>
      <Header course={course}/>
      <Content content={course.content}/>
      <Total total={course.content}/>
    </div>
  )
}

export default App