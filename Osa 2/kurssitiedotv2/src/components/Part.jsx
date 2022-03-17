import React from 'react'

const Part = ({item}) => {
  return (
    <div>{item.name} {item.exercises}</div>
  )
}

export default Part