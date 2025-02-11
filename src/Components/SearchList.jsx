import React from 'react'
import { useSelector } from 'react-redux'
import { getWeatherData } from '../Services/ApiServices'
import { useDispatch } from 'react-redux'
import { updateData } from '../Features/WeatherDataSlice'
import { updateList, clearList } from '../Features/SearchCities'
import { nanoid } from '@reduxjs/toolkit'
import '../style/listItem.css'

const SearchList = ({ showList }) => {
    const dispatch = useDispatch()
    //get City Search Data from redux store
    const cityData = useSelector(state => state.city)

    //Update current weather choice into redux store
    const onClick = (coordinates) => {
        getWeatherData(coordinates).then((res) => {
            dispatch(updateData(res.data))
            showList(false)
        })
        dispatch(clearList())
    }

    return (
        <>
            <ul className='ulItem'>
                {cityData.map((item) => (
                    <li className='' key={nanoid()} onClick={() => onClick(`${item.location.lat},${item.location.lon}`)}>
                        <div className="list-item">
                            <div className="data">
                                <h1 className="city-text">{item.location.name} | {item.location.region}</h1>
                                <h1 className="weather">{item.current.temp_f}°</h1>
                            </div>
                            <img className = 'image'src={item.current.condition.icon}/>
                        </div>


                    </li>
                ))}
            </ul>
        </>
    )
}

export default SearchList