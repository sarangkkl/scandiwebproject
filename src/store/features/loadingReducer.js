import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    loading:true,
}

export const loaderReducer = createSlice({
    name:"loader",
    initialState,
    reducers:{
        toggleState:state=>{
            state.loading = !state.loading
        }
    }

})

export const {toggleState} = loaderReducer.actions;

export default loaderReducer.reducer;