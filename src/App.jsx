import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './Components/SearchBar'
import { getWeatherData } from './Services/ApiServices'
export {getWeatherData} from './Services/ApiServices'

function App() {

useEffect(() => {
  getWeatherData('Manila').then( res => console.log(res.data)).catch(err => console.log(err))
})

  return (
   <>
    <SearchBar />

   </>
  )
}

export default App
