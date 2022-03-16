import React from 'react'

const Header = ({course}) => {
  return (
    <div style={{fontSize: 20, display: 'flex', justifyContent: "center"}}><h1>{course}</h1></div>
  )
}

export default Header