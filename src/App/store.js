import { configureStore } from "@reduxjs/toolkit";
import weatherData from '../Features/WeatherDataSlice'

export const store = configureStore({
    reducer: {
        weatherData,
    },
})