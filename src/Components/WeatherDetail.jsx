import React from 'react'
import { useState, useEffect } from 'react'
import { getWeatherData } from '../Services/ApiServices'
import { useSelector } from 'react-redux'


const WeatherDetail = () => {
  const data = useSelector(state=>state.weatherData)
  console.log(data)
  
  return (
    <>
    </>
  )
}

export default WeatherDetail