import React from "react";
import axios from "axios";

const url = "http://localhost:3001/persons"

const getPersons = (setPersons) => {
  axios.get(url).then((notes) => {
    setPersons(notes.data);
    
  });
};

const addPerson = (newPerson) => {
    axios.post(url, newPerson).then((response) => {
        console.log("New person added!")
    })
}

const deletePerson = (personId) => {
    axios.delete(`${url}/${personId}`)
}

const replaceNumber = (updatedPerson) => {
    axios.put(`${url}/${updatedPerson.id}`, updatedPerson).then((response) => {
        console.log("Phonenumber changed!")
        
    })
}

export {getPersons, addPerson, deletePerson, replaceNumber}