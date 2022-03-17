import React from 'react'

const Search = ({handleSearchChange, searchedName}) => {
  return (
    <div>
        Search: <input onChange={handleSearchChange} value={searchedName} />
      </div>
  )
}

export default Search