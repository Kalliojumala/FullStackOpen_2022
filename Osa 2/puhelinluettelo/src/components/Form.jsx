import React from 'react'

const Form = ({handleSubmit, handleNameChange, handleNumberChange, newName, newNumber}) => {
  return (
    <form onSubmit={handleSubmit}>
        <div>
          <h2>Add new</h2>
          Name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          Phonenumber: <input onChange={handleNumberChange} value={newNumber} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
  )
}

export default Form