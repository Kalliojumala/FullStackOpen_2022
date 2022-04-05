import React from "react";
import { useState, useEffect } from "react";
import Search from "./components/Search";
import Form from "./components/Form";
import PersonList from "./components/PersonList";
import {
  getPersons,
  addPerson,
  deletePerson,
  replaceNumber,
} from "./serverFunctions";
import Message from "./components/Message";

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    getPersons(setPersons);
  }, []);

  const [searched, setSearched] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchedName, setSearchedName] = useState("");
  const [message, setMessage] = useState(null);
  const [messageColor, setMessageColor] = useState("green");

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
    if (searchedName.length > 0) {
      let matches = persons.filter((person) => {
        return person.name.toLowerCase().includes(searchedName.toLowerCase());
      });
      console.log("Render!");
      setSearched(matches);
    }
  }, [searchedName, persons]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const alreadyAdded = (person) => {
      if (person.name === newName) {
        return person;
      }
    };

    const addedPerson = persons.find(alreadyAdded);

    if (addedPerson === undefined) {
      let newId;

      try {
        newId = persons[persons.length - 1].id + 1;
      } catch (e) {
        newId = 1;
      }
      let newPerson = {
        name: newName,
        number: newNumber,
        id: newId,
      };

      addPerson(newPerson);
      setPersons([...persons, newPerson]);
      resetInputs();
      displayMessage(`Succesfully added ${newPerson.name}.`, "green");
      resetMessage();
    } else {
      if (
        window.confirm(
          `${addedPerson.name} is already added. Do you want to update phonenumber from ${addedPerson.phonenumber} to ${newNumber}?`
        )
      ) {
        let updatedPerson = { ...addedPerson, number: newNumber };
        replaceNumber(updatedPerson, newNumber, persons, resetInputs, setPersons, displayMessage, resetMessage);
        
      }
    }
  };

  const handleDelete = (personId, personName) => {
    if (window.confirm(`Do you really want to delete ${personName}?`)) {
      deletePerson(personId, persons,  setPersons, displayMessage, resetMessage, personName);
      
    }
  };
  const resetInputs = () => {
    setNewName("");
    setNewNumber("");
  };

  const displayMessage = (message, color) => {
    setMessage(message);
    setMessageColor(color);
  };

  const resetMessage = () => {
    setTimeout(function () {
      setMessage(null);
      setMessageColor(null);
    }, 4000);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Message message={message} color={messageColor} />
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
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
