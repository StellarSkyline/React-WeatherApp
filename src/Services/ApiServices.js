import axios from "axios"

const apiRequest = axios.create({
    baseURL: 'http://api.weatherapi.com/v1/',
    headers: {
        'Content-Type': 'applicationn/json',
        'key': '8c7556501dff4d0798b140838240912'
    }
})

export async function getWeatherData(city) {
    return await apiRequest.get(`current.json?q=${city}`)
}

export async function getSearchCitiesData(city) {
    return await apiRequest.get(`search.json?q=${city}`)

}
