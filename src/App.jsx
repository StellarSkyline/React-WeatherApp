import './App.css'
import SearchBar from './Components/SearchBar'
import WeatherDetail from './Components/WeatherDetail'
import { useState, useEffect } from 'react'
import { getWeatherData, getSearchCitiesData } from './Services/ApiServices'
import { useDispatch, useSelector } from 'react-redux'
import { updateData } from './Features/WeatherDataSlice'
import { updateList } from './Features/SearchCities'

function App() {
  //State
  const dispatch = useDispatch()

  //API Calls data is stored in Redux
  const getCurrentWeather = (city) => {
    getWeatherData(city).then((res)=> {
      dispatch(updateData(res.data))
    })
  }

  const getSearchCities = (city) => {
    getSearchCitiesData(city).then((res)=> {
      dispatch(updateList(res.data))
    })
  }

return (
  <>
    <SearchBar searchCity={(searchCity) => {
      getSearchCities(searchCity)
    }} />
    
    <WeatherDetail />
  </>
)
}

export default App


