
import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';


const App = () => {
  const course = 'Half Stack application development'
  const content = [
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

  
  
  return (
    <div>
      <Header course={course}/>
      <Content content={content}/>
      <Total total={content[0].exercises + content[2].exercises + content[1].exercises}/>
    </div>
  )
}

export default App