import React from "react";

const PersonList = ({ searchedName, searched, persons, handleDelete }) => {
  return (
    <>
      <h2>Numbers</h2>

      {searchedName.length > 0
        ? searched.map((person) => (
            <div key={person.name} style={{ marginBottom: "10px" }}>
              {" "}
              {person.name}, {person.phonenumber}
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => handleDelete(person.id, person.name)}
              >
                Delete
              </button>
            </div>
          ))
        : persons.map((person) => (
            <div key={person.name} style={{ marginBottom: "10px" }}>
              {" "}
              {person.name}, {person.phonenumber}
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => handleDelete(person.id, person.name)}
              >
                Delete
              </button>
            </div>
          ))}
      {searchedName.length > 0 && searched.length === 0 ? (
        <div>No matches! Try adding a phone number :)</div>
      ) : null}
      {persons.length === 0 ? <div>No numbers found!</div> : null}
    </>
  );
};

export default PersonList;
