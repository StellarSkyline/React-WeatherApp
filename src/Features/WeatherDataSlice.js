import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  "location": {
      "name": "London",
      "region": "City of London, Greater London",
      "country": "United Kingdom",
      "lat": 51.5171,
      "lon": -0.1062,
      "tz_id": "Europe/London",
      "localtime_epoch": 1738861927,
      "localtime": "2025-02-06 17:12"
  },
  "current": {
      "last_updated_epoch": 1738861200,
      "last_updated": "2025-02-06 17:00",
      "temp_c": 7.4,
      "temp_f": 45.3,
      "is_day": 0,
      "condition": {
          "text": "Partly cloudy",
          "icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
          "code": 1003
      },
      "wind_mph": 10.5,
      "wind_kph": 16.9,
      "wind_degree": 49,
      "wind_dir": "NE",
      "pressure_mb": 1040.0,
      "pressure_in": 30.71,
      "precip_mm": 0.0,
      "precip_in": 0.0,
      "humidity": 66,
      "cloud": 50,
      "feelslike_c": 4.5,
      "feelslike_f": 40.0,
      "windchill_c": 2.6,
      "windchill_f": 36.7,
      "heatindex_c": 5.9,
      "heatindex_f": 42.7,
      "dewpoint_c": 1.5,
      "dewpoint_f": 34.7,
      "vis_km": 10.0,
      "vis_miles": 6.0,
      "uv": 0.0,
      "gust_mph": 15.9,
      "gust_kph": 25.5
  }
}

export const WeatherDataSlice = createSlice({
    name:'WeatherDataSlice',
    initialState,
    reducers: {
        updateData:(state,action) => {
            state.current = action.payload.current
            state.location = action.payload.location
        }
    }
})

export const {updateData} = WeatherDataSlice.actions
export default WeatherDataSlice.reducer
