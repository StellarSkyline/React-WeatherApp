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

    // //API Call pattern using useEffect
    // useEffect(() => {
    //     const fetchJobs = async () => {
    //         const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs'
    //         try {
    //             const res = await fetch(apiUrl)
    //             const data = await res.json()
    //             setJobs(data)
    //         } catch (error) {
    //             console.log("Error fetching Data", error)
    //         } finally {
    //             setLoading(false)
    //         }
    //     }
    //     fetchJobs()
    // }, [])