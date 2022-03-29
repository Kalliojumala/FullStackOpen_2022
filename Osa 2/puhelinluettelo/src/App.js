import React from "react";
import { useState, useEffect } from "react";
import Search from "./components/Search";
import Form from "./components/Form";
import PersonList from "./components/PersonList";
import axios from "axios"

const App = () => {
   const [persons, setPersons] = useState([]); 
  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(notes => {
      setPersons(notes.data)
      
    })
  }, [])

  const [searched, setSearched] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchedName, setSearchedName] = useState("");
  

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const handleSearchChange = (event) => {
    setSearchedName(event.target.value);
  };
  useEffect(() => {
    let matches = persons.filter((person) => {
      return person.name.toLowerCase().includes(searchedName.toLowerCase());
    });
    console.log("Render!")
    setSearched(matches);
  }, [searchedName]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const alreadyAdded = (person) => {
      return person.name === newName;
    };

    if (persons.find(alreadyAdded) === undefined) {
      let newPerson = { name: newName, phonenumber: newNumber };
      setPersons([...persons, newPerson]);
      console.log(persons);
      setNewName("");
      setNewNumber("");
    } else {
      alert(`${newName} is already added!`);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Search
        handleSearchChange={handleSearchChange}
        searchedName={searchedName}
      />

      <Form
        handleSubmit={handleSubmit}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
      />

      <PersonList
        searchedName={searchedName}
        searched={searched}
        persons={persons}
      />
    </div>
  );
};

export default App;
