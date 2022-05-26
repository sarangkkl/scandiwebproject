import { configureStore } from '@reduxjs/toolkit'
import loaderReducer from "./features/loadingReducer";
import currencyReducer from "./features/currencyReducer";
import cartReducer from "./features/cartReducer";
export const store = configureStore({
    reducer:{
        loading:loaderReducer,
        currency:currencyReducer,
        cart:cartReducer,
    }
})