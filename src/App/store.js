import { configureStore } from "@reduxjs/toolkit";
import weatherData from '../Features/WeatherDataSlice'
import searchCityData  from "../Features/SearchCities";

export const store = configureStore({
    reducer: {
        'weatherData':weatherData,
        'city':searchCityData,
    },
})