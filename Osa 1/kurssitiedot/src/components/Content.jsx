import React from 'react'
import Part from "./Part";

const Content = ({content}) => {

  return (
    <div style={{display: 'flex', justifyContent: "center", flexDirection: 'column'}}>
    {
        content.map((item, i) => (
            <Part key={i} item={item}/>
        ))
    }    
    </div>
  )
}

export default Content