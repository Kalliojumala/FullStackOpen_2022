import axios from "axios";

const url = "api/persons";

const getPersons = (setPersons) => {
  
  axios.get(url).then((notes) => {
    setPersons(notes.data);
  });
};

const addPerson = (newPerson, setPersons, resetInputs, displayMessage, resetMessage) => {
  axios.post(url, newPerson).then((response) => {
    getPersons(setPersons);
    resetInputs();
    displayMessage(`Succesfully added ${newPerson.name}.`, "green");
    resetMessage();
  });
};

const deletePerson = (personId, persons,  setPersons, displayMessage, resetMessage, personName) => {
  axios
    .delete(`${url}/${personId}`)
    .then((result, error) => {
      let updateDisplayedPersons = persons.filter((person) => {
        return person.id !== personId;
      });

      setPersons(updateDisplayedPersons);
      displayMessage(`Succesfully deleted ${personName}.`, "green");
      resetMessage();
    })
    .catch((err) => {
      
      displayMessage(`${personName} was already deleted from the server. Refresh to see changes.`, "red");
      resetMessage();
    });
};

const replaceNumber = (
  updatedPerson,
  newNumber,
  persons,
  resetInputs,
  setPersons,
  displayMessage,
  resetMessage
) => {
  axios
    .put(`${url}/${updatedPerson.id}`, updatedPerson)
    .then((response, err) => {
      
      resetInputs();
      getPersons(setPersons);
      displayMessage(`Succesfully updated ${updatedPerson.name}.`, "green");
      resetMessage();
    })
    .catch((err) => {
      resetInputs();
      displayMessage(`Failed to update ${updatedPerson.name}. Page reload might be necessary for up-to-date data.`, "red");
      resetMessage();
    });
};

export { getPersons, addPerson, deletePerson, replaceNumber };
