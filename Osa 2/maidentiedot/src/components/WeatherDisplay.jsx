import React, {useState, useEffect} from 'react'
import axios from 'axios';

const WeatherDisplay = ( {city} ) => {
  const [weather, setWeather] = useState(null);  
  const apiKey = process.env.REACT_APP_WEATHER_KEY

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`).then((response) => {
        setWeather(response.data)
        console.log(response.data)
    })
  }, [])


  return (
    <div>
        <br/>
        <h3>Weather in {city}</h3>
        {weather ? 
        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
        
            Temperature {weather.main.temp} Celcius <br/>
            Feels like {weather.main.feels_like} Celcius
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather icon"/>
            Wind {weather.wind.speed} m/s
        </div> : null}
    </div>
  )
}

export default WeatherDisplay