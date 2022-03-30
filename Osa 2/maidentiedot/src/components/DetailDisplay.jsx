import React from "react";
import WeatherDisplay from "./WeatherDisplay";
const DetailDisplay = ({ country }) => {
  const languages = [];
  for (const [key, value] of Object.entries(country.languages)) {
    languages.push(value);
  }
  
  return (
    <div>
      <h3>{country.name.common}</h3>
      <div>
        Capital: {country.capital}
        <br />
        Area: {country.area}
      </div>
      <div>
        <br />
        Languages:
      </div>
      <ul>
        {languages.map((language, i) => (
          <li key={i}>{language}</li>
        ))}
      </ul>
      <div>
          <br/>
          Flag
          <br/>
      <img src={country.flags.png} alt={country.name.common}/>
      </div>
      <WeatherDisplay city={country.capital}/>
    </div>
  );
};

export default DetailDisplay;
