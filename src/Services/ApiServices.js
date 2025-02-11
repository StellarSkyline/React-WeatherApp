import axios from "axios"
import { ApiKey } from "./ApiKey"

const apiRequest = axios.create({
    baseURL: 'http://api.weatherapi.com/v1/',
    headers: {
        'Content-Type': 'applicationn/json',
        'key': ApiKey
    }
})

export async function getWeatherData(city) {
    return await apiRequest.get(`current.json?q=${city}`)
}

export async function getSearchCitiesData(city) {
    return await apiRequest.get(`search.json?q=${city}`)
}
