import './App.css'
import SearchBar from './Components/SearchBar'
import WeatherDetail from './Components/WeatherDetail'
import { useState, useEffect } from 'react'
import { getWeatherData, getSearchCitiesData } from './Services/ApiServices'

function App() {
  const [weatherData, setWeatherData] = useState('')
  const [searchCities, setSearchCities] = useState([])

  const getCurrentWeather = (city) => {
    getWeatherData(city).then((res)=> {
      setWeatherData(res.data)
    })
  }

  const getSearchCities = (city) => {
    getSearchCitiesData(city).then((res)=> {
      setSearchCities(res.data)
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
