import React from 'react'

const Part = ({item}) => {
  return (
    <div>
        <div>
            {item.part}
        </div>
        <div>
            Exercises: {item.exercises}
        </div>
    </div>
  )
}

export default Part;