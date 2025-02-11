import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState =[]


export const SearchCitySlice = createSlice({
    name:'SearchCitySlice',
    initialState,
    reducers: {
        updateList: (state, action) => {
           state.push(action.payload)
        },
        clearList:(state,action)=>{
            return initialState
        }
    }
})

export const {updateList, clearList} = SearchCitySlice.actions
export default SearchCitySlice.reducer