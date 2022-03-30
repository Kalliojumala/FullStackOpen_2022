import {useState, useEffect} from 'react';
import axios from 'axios';
import DisplayData from './components/DisplayData';
import SearchBar from './components/SearchBar';

function App() {

  //Fetch data, save to state
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountryData(response.data)
      
    })
  }, [])

  //SearchBar state/handling
  const [search, setSearch] = useState("");
  const [searchedList, setSearchedList] = useState([]);
  useEffect(() => {
    let matches = countryData.filter((country) => {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    });
    
    setSearchedList(matches);
  }, [search]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  }
  
  return (
    <div className="App">
      <h1>Country Search App!</h1>
      <SearchBar handleSearchChange={handleSearchChange}/>
      {search !== "" ?
      <DisplayData searchedList={searchedList} search={search}/>
      : null }
    </div>
  );
}

export default App;
