import { useState,createContext,useContext } from "react";

//create context
const context = createContext()

//Create Context Provider
const ContextProvider = ({children}) => {
    const [weatherData, setWeatherData] = useState({})
    const [cityData, setCityData] = useState([])

    return(
        <context.Provider value ={{weatherData, cityData, setWeatherData, setCityData}}>
            {children}
        </context.Provider>
    )
}

 //create custom hook to provide context
 const UseMyContext = () => {
    return useContext(context)
}

export {ContextProvider, UseMyContext}
