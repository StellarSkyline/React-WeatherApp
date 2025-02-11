import React from 'react'
import { useSelector } from 'react-redux'
import '../style/weatherDetail.css'

const WeatherDetail = () => {
  const data = useSelector(state => state.weatherData)
  const icon = data.current.condition.icon
  icon.slice(2)
  return (
    <>
      <div className="home-example-two">
        <div className="frame-1686555390">
          <img className="group-39" src={icon} />
          <div className="frame-1686555389">
            <div className="hyderabad">{data.location.name}</div>
            <div className="sub_text">{data.location.region}</div>
          </div>
          <div className="component-1">
            <div className="_25">{data.current.temp_f}°</div>
          </div>
        </div>
        <div className="frame-1686555381">
          <div className="frame-1686555377">
            <div className="humidity">Humidity</div>
            <div className="_20">{data.current.humidity}</div>
          </div>
          <div className="frame-1686555378">
            <div className="uv">UV</div>
            <div className="_4">{data.current.uv}</div>
          </div>
          <div className="frame-1686555379">
            <div className="feels-like">Feels Like</div>
            <div className="_38">{data.current.feelslike_f}</div>
          </div>
        </div>
      </div>

    </>
  )
}

export default WeatherDetail