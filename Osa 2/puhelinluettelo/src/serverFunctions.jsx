import axios from "axios";

//build version only
const url = "api/persons";

//local json dummy server
//const url = "persons";

const getPersons = (setPersons) => {
  
  axios.get(url).then((notes) => {
    setPersons(notes.data);
  });
};

const addPerson = (newPerson, setPersons, resetInputs, displayMessage, resetMessage) => {
  axios.post(url, newPerson).then((response, error) => {
    getPersons(setPersons);
    resetInputs();
    displayMessage(`Succesfully added ${newPerson.name}.`, "green");
    resetMessage();
  }).catch(error => {
    resetInputs();
    displayMessage(error.response.data.message, "red");
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
    .catch((error) => {
      
      displayMessage(error.response.data.message, "red");
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
    .then((response, error) => {
      
      resetInputs();
      getPersons(setPersons);
      displayMessage(`Succesfully updated ${updatedPerson.name}.`, "green");
      resetMessage();
    })
    .catch((error) => {
      
      resetInputs();
      
      displayMessage(error.response.data.message, "red");
      resetMessage();
    });
};

export { getPersons, addPerson, deletePerson, replaceNumber };
