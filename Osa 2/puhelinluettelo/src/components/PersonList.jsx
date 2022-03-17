import React from "react";

const PersonList = ({searchedName, searched, persons}) => {
  return (
    <>
      <h2>Numbers</h2>

      {searchedName.length > 0
        ? searched.map((person) => (
            <div key={person.name}>
              {" "}
              {person.name}, {person.phonenumber}
            </div>
          ))
        : persons.map((person) => (
            <div key={person.name}>
              {" "}
              {person.name}, {person.phonenumber}
            </div>
          ))}
      {searchedName.length > 0 && searched.length === 0 ? (
        <div>No matches! Try adding a phone number :)</div>
      ) : null}
    </>
  );
};

export default PersonList;
