import React, { useState, useEffect } from "react";
import axios from 'axios';




const  Weather = () => {

const [name, setName] = useState('');
const [icon, setIcon] = useState('');
const [layout, setLayout] = useState('');
const [temp, setTemp] = useState(0);
const [humidity, setHumidity] = useState(0);
const [widSpeed, setWindSpeed] = useState(0);
const [windDegree, setWindDegree] = useState(0);
const apiKey = "b2307c78a2534a93cbd29390deba0618";  


  useEffect(() => {
    navigator.geolocation.getCurrentPosition( (position) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${apiKey}`)
    .then((result) => {
      console.log(result.data)
      setName(result.data.name);
      setIcon(result.data.weather[0].icon);
      setLayout(result.data.weather[0].description);
      setTemp(result.data.main.temp);
      setHumidity(result.data.main.humidity);
      setWindSpeed(result.data.wind.speed);
      setWindDegree(result.data.wind.deg)
    })}, console.log("err") );
  }) 

  return (
    <div>
      <h2>{name}</h2>
      <img src={icon} alt={layout}/>
      <p>{temp}°C</p>
      <p>Humidity : {humidity}%</p>
      <p>Wind speed : {Math.round(widSpeed*3.6)} km/h</p>
    </div>

  )
}

export default Weather;