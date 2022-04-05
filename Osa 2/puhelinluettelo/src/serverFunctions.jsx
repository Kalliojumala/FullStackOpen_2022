import axios from "axios";

const url = "http://localhost:3001/api/persons";

const getPersons = (setPersons) => {
  axios.get(url).then((notes) => {
    setPersons(notes.data);
  });
};

const addPerson = (newPerson) => {
  axios.post(url, newPerson).then((response) => {
    console.log("New person added!");
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
      let updatePersons = persons.map((person) => {
        if (person.id === updatedPerson.id) {
          person.phonenumber = newNumber;
        }
        return person;
      });
      resetInputs();
      setPersons(updatePersons);
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
