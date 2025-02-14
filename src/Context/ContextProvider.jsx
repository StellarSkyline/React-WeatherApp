import { useState } from "react";
import Context from "./context";


const ContextProvider =({children}) => {
    const [weatherData, setWeatherData] = useState({})
    const [cityData, setCityData] = useState([])

    return (
        <Context.Provider value={{weatherData, cityData, setWeatherData, setCityData}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider