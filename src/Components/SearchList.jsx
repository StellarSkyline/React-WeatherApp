import React from 'react'
import { useSelector } from 'react-redux'
import { getWeatherData } from '../Services/ApiServices'
import { useDispatch } from 'react-redux'
import { updateData } from '../Features/WeatherDataSlice'

const SearchList = () => {
    const dispatch = useDispatch()
    //get City Search Data from redux store
    const cityData = useSelector(state=>state.city)

    const onClick = (coordinates) => {
        getWeatherData(coordinates).then((res)=>{
            dispatch(updateData(res.data))
        })
    }


  return (
    <>
    <ul>
        {cityData.map((item) => (
            <li key ={item.id} onClick={ () => onClick(`${item.lat},${item.lon}`)}>
                {item.name} | {item.country}
            </li>
        ))}

    </ul>

    </>
  )
}

export default SearchList