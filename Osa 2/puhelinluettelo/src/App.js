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

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    getPersons(setPersons);
  }, []);

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
      let newPerson = {
        name: newName,
        phonenumber: newNumber,
        id: persons[persons.length - 1].id + 1,
      };
      addPerson(newPerson);
      setPersons([...persons, newPerson]);
      setNewName("");
      setNewNumber("");
    } else {
      if (
        window.confirm(
          `${addedPerson.name} is already added. Do you want to update phonenumber from ${addedPerson.phonenumber} to ${newNumber}?`
        )
      ) {
        let updatedPerson = { ...addedPerson, phonenumber: newNumber };
        replaceNumber(updatedPerson);
        let updatePersons = persons.map((person) => {
          if (person.id === addedPerson.id) {
            person.phonenumber = newNumber;
          }
          return person;
        });
        setNewName("");
        setNewNumber("");
        setPersons(updatePersons);
      }
    }
  };

  const handleDelete = (personId, personName) => {
    if (window.confirm(`Do you really want to delete ${personName}?`)) {
      deletePerson(personId);
      let updateDisplayedPersons = persons.filter((person) => {
        return person.id !== personId;
      });

      setPersons(updateDisplayedPersons);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Message content={messageContent} color={messageColor}/>
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
