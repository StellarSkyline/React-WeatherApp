import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './Components/SearchBar'
import { getWeatherData } from './Services/ApiServices'


function App() {
  //Sample API working using axios
  useEffect(() => {
    getWeatherData('Manila').then(
      response => {
        const data = response.data
        console.log(response.data)
        console.log(response.data.location.country)
      }
    )

  }, [])

  return (
    <>
      <SearchBar />

    </>
  )
}

export default App
