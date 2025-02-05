import './App.css'
import SearchBar from './Components/SearchBar'
import WeatherDetail from './Components/WeatherDetail'
import { useState, useEffect } from 'react'
import { getWeatherData } from './Services/ApiServices'

function App() {
  const [weatherData, setWeatherData] = useState('')

  const getCurrentWeather = (city) => {
    getWeatherData(city).then((res)=> {
      setWeatherData(res.data)
    })
  }


return (
  <>
    <SearchBar searchCity={(searchCity) => {
      getCurrentWeather(searchCity)
    }} />
    <WeatherDetail weatherData ={weatherData} />

  </>
)
}

export default App
