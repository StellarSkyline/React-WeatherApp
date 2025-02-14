import React from 'react'
import '../style/weatherDetail.css'
import { useContext } from 'react'
import Context from '../Context/context'


const WeatherDetail = () => {
  const {weatherData} = useContext(Context)
  const icon = weatherData.current.condition.icon
  icon.slice(2)
  return (
    <>
      <div className="home-example-two">
        <div className="frame-1686555390">
          <img className="group-39" src={icon} />
          <div className="frame-1686555389">
            <div className="hyderabad">{weatherData.location.name}</div>
            <div className="sub_text">{weatherData.location.region}</div>
          </div>
          <div className="component-1">
            <div className="_25">{weatherData.current.temp_f}°</div>
          </div>
        </div>
        <div className="frame-1686555381">
          <div className="frame-1686555377">
            <div className="humidity">Humidity</div>
            <div className="_20">{weatherData.current.humidity}</div>
          </div>
          <div className="frame-1686555378">
            <div className="uv">UV</div>
            <div className="_4">{weatherData.current.uv}</div>
          </div>
          <div className="frame-1686555379">
            <div className="feels-like">Feels Like</div>
            <div className="_38">{weatherData.current.feelslike_f}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WeatherDetail