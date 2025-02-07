import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {}

export const WeatherDataSlice = createSlice({
    name:'WeatherDataSlice',
    initialState,
    reducers: {
        updateData:(state,action) => {
            return action.payload
        }
    }
})

export const {updateData} = WeatherDataSlice.actions
export default WeatherDataSlice.reducer
