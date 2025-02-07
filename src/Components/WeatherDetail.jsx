import React from 'react'
import { useSelector } from 'react-redux'


const WeatherDetail = () => {
  const data = useSelector(state=>state.weatherData)
  return (
    <>
    <h1>{data.location.name} | {data.location.region} | {data.location.country}</h1>
    </>
  )
}

export default WeatherDetail