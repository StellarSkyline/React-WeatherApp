import './App.css'
import SearchBar from './Components/SearchBar'
import { useState } from 'react'
import SearchList from './Components/SearchList'


function App() {
  const [showList, setShowList] = useState(true)

  return (
    <>
      <SearchBar />
      <SearchList/>
    </>
  )
}

export default App


