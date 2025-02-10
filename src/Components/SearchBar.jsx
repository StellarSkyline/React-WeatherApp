import React from 'react'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { getSearchCitiesData } from '../Services/ApiServices'
import { useDispatch } from 'react-redux'
import { updateList } from '../Features/SearchCities'
import '../style/searchbar.css'

const SearchBar = ({showList}) => {
    const dispatch = useDispatch()
    const [city, setCity] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        getSearchCitiesData(city).then((res)=> {
            console.log(res.data)
            dispatch(updateList(res.data))
            setCity('')
        })
    
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

