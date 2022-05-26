import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    cart: {
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
      
    },
  };

export const cartReducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.cartItems.push(action.payload);
            localStorage.setItem("cartItems", JSON.stringify(state.cart.cartItems));
        },
        removeFromCart: (state, action) => {
            state.cart.cartItems.splice(action.payload, 1);
            localStorage.setItem("cartItems", JSON.stringify(state.cart.cartItems));
        }
    }
})

export const {addToCart,removeFromCart} = cartReducer.actions;

export default cartReducer.reducer;