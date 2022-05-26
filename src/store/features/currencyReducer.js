import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    currencyState:"",
}

export const currencyReducer = createSlice({
    name:"currencyState",
    initialState,
    reducers:{
        toggleCurrency:(state,action)=>{
            state.currencyState = action.payload
        }
    }

})


export const {toggleCurrency} = currencyReducer.actions;

export default currencyReducer.reducer;