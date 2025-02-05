import React from 'react'
import { useState } from 'react'
import { getWeatherData } from '../Services/ApiServices'

const SearchBar = () => {
    const [city, setCity] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(city)
    }

    const onChange = (e) => {
        setCity(e.target.value)
    }
    
  return (
    <>
    <form onSubmit = {handleSubmit}>
        <input 
            className='bg-gray-300 rounded-lg p-5 h-10 w-80'
            type="text" 
            placeholder="Search City" 
            value={city}
            onChange={onChange}
        />

        <button
        type='submit'>
            Search</button>
    </form>
    </>
  )
}

export default SearchBar

