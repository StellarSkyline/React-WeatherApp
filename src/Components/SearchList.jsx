import React from 'react'
import { useSelector } from 'react-redux'
import { getWeatherData } from '../Services/ApiServices'
import { useDispatch } from 'react-redux'
import { updateData } from '../Features/WeatherDataSlice'
import { updateList } from '../Features/SearchCities'
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

        dispatch(updateList([]))
    }

    return (
        <>
            <ul className='ulItem'>
                {cityData.map((item) => (
                    <li className='' key={item.id} onClick={() => onClick(`${item.lat},${item.lon}`)}>
                        <div className="list-item">
                            <div className="data">
                                <div className="city-text">{item.name} | {item.region} | {item.country}</div>
                            </div>
                        </div>

                    </li>
                ))}

            </ul>

        </>
    )
}

export default SearchList