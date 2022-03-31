import React from 'react'

const Message = ({message, color}) => {
  
    const messageStyles = {
      maxWidth: "800px",
      backgroundColor: "lightgray",
      minHeight: "80px",
      borderColor: color,
      borderStyle: "solid",
      borderWidth: "4px",
      borderRadius: "10px",
      display: "flex",
      alignItems: "center",
      marginBottom: "20px",
      flexDirection: "row",
    }

    const textStyles = {
      fontSize: "25px",
      fontWeight: "600",
      paddingLeft: "10px",
      color: color,
    }
  if(!message) {
    return null   
  }
  return (
    <>
    <div style={messageStyles}>
    <div style={textStyles}>{message}</div>
    </div>
    </>
  )
}

export default Message;