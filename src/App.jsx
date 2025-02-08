import './App.css'
import SearchBar from './Components/SearchBar'
import { useState } from 'react'
import SearchList from './Components/SearchList'
import WeatherDetail from './Components/WeatherDetail'

function App() {
  const [showList, setShowList] = useState(true)

  //Todo figure out elegant way to switch from detail back to list component

  //Load in correct Components
  const loadContent = (isList) => {
    if (isList) {
      return <SearchList showList={(res) => { setShowList(res) }} />
    } else {
      return <WeatherDetail />
    }
  }

  return (
    <>
      <SearchBar />
      {loadContent(showList)}
    </>
  )
}

export default App


