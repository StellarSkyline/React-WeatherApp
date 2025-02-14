import React from 'react'
import { getWeatherData } from '../Services/ApiServices'
import { nanoid } from '@reduxjs/toolkit'
import '../style/listItem.css'
import { useContext } from 'react'
import Context from '../Context/context'

const SearchList = ({ showList }) => {

    //get data from context
    const {cityData} = useContext(Context)
    const {setCityData} = useContext(Context)   
    const {setWeatherData} = useContext(Context)


    //Update current weather choice into redux store
    const onClick = (coordinates) => {
        getWeatherData(coordinates).then((res) => {
            setWeatherData(res.data)
            showList(false)
        })
        setCityData([])
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