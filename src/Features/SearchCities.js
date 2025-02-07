import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState =[]


export const SearchCitySlice = createSlice({
    name:'SearchCitySlice',
    initialState,
    reducers: {
        updateList: (state, action) => {
            return action.payload
        }
    }
})

export const {updateList} = SearchCitySlice.actions
export default SearchCitySlice.reducer