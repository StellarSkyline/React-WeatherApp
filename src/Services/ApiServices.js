import axios from "axios"



const apiRequest = axios.create({
    baseURL: 'http://api.weatherapi.com/v1/',
    headers: {
        'Content-Type': 'applicationn/json',
        'key': '8c7556501dff4d0798b140838240912'
    }
})

export function getWeatherData(city) {
   return apiRequest.get(`current.json?q=${city}`)
}