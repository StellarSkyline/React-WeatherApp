import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './Components/SearchBar'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const apiKey = '8c7556501dff4d0798b140838240912'

  //TestAPI Call
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get('http://api.weatherapi.com/v1/current.json?q=London', {
          headers: {
            'Content-Type': 'application/json',
            'key': `${apiKey}`
          }
        })
      
        console.log(response.data)

      }
      catch(error) {
        console.error(error)
      }
    }
    fetch()
  })

  return (
   <>
    <SearchBar />

   </>
  )
}

export default App
