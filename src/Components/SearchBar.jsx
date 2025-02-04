import React from 'react'
import { useState } from 'react'

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
            className='bg-gray-300 rounded-lg p-5'
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

