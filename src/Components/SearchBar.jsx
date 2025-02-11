import React from 'react'
import { useState } from 'react'
import { getSearchCitiesData, getWeatherData } from '../Services/ApiServices'
import { useDispatch } from 'react-redux'
import { updateList } from '../Features/SearchCities'

import '../style/searchbar.css'

const SearchBar = ({ showList }) => {
    const dispatch = useDispatch()
    const [city, setCity] = useState('')

    //Chaining multiple axios requests
    const fetchData = async (city) => {
        const response = await getSearchCitiesData(city)
        const items = response.data
        
        const requests = items.map(item => {
            return getWeatherData(item.name)
        })

        const results = await Promise.all(requests)
        const data = results.map(result => result.data)
        data.forEach((item) => {
            dispatch(updateList(item))
        })
        return data
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchData(city)
        setCity('')

    }

    const onChange = (e) => {
        setCity(e.target.value)
        showList(true)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    className='searchBar rounded-lg p-5 h-11 w-80'
                    type="text"
                    placeholder="Search City"
                    value={city}
                    onChange={onChange}
                />
            </form>
        </>
    )
}

export default SearchBar

