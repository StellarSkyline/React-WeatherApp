import './App.css'
import SearchBar from './Components/SearchBar'
import { useState } from 'react'
import SearchList from './Components/SearchList'
import WeatherDetail from './Components/WeatherDetail'

function App() {
  const [showList, setShowList] = useState(true)
  return (
    <>
      <SearchBar showList={(res)=> {setShowList(res)}} />
      { showList ? <SearchList showList={(res) => { setShowList(res) }} /> : <WeatherDetail /> }
    </>
  )
}

export default App


