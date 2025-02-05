import React from 'react'
import { useState } from 'react'
import { getWeatherData } from '../Services/ApiServices'
import { FaSearch } from 'react-icons/fa'

const SearchBar = ({searchCity}) => {
    const [city, setCity] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        searchCity(city)
    }

    const onChange = (e) => {
        setCity(e.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    className='bg-gray-300 rounded-lg p-5 h-11 w-80'
                    type="text"
                    placeholder="Search City"
                    value={city}
                    onChange={onChange}
                />

                <button 
                className = 'ml-3' 
                type='submit'>
                    <FaSearch
                    className ='h-5 w-5' />
                </button>
            </form>
        </>
    )
}

export default SearchBar

