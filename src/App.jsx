import './App.css'
import SearchBar from './Components/SearchBar'
import WeatherDetail from './Components/WeatherDetail'
import { useState, useEffect } from 'react'
import { getWeatherData, getSearchCitiesData } from './Services/ApiServices'
import { useSelector } from 'react-redux'

function App() {
  //State
  const [weatherData, setWeatherData] = useState('')
  const [searchCities, setSearchCities] = useState([])

  //API Calls, research a viewModel pattern
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


