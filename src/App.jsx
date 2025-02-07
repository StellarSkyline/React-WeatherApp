import './App.css'
import SearchBar from './Components/SearchBar'
import WeatherDetail from './Components/WeatherDetail'
import { useState, useEffect } from 'react'
import { getWeatherData, getSearchCitiesData } from './Services/ApiServices'
import { useDispatch, useSelector } from 'react-redux'
import { updateData } from './Features/WeatherDataSlice'

function App() {
  //State
  const dispatch = useDispatch()
  const [weatherData, setWeatherData] = useState('')
  const [searchCities, setSearchCities] = useState([])

  //API Calls, research a viewModel pattern
  const getCurrentWeather = (city) => {
    getWeatherData(city).then((res)=> {
      dispatch(updateData(res.data))
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
    
    <WeatherDetail />
  </>
)
}

export default App


