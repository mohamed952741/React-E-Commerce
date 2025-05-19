import { createSlice } from "@reduxjs/toolkit";

const initialItems = JSON.parse(localStorage.getItem('cart')) || [];

const initialState = {
  items: initialItems,
  totalItems: initialItems.reduce((total, i) => total + i.quantity, 0),
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            const item = action.payload;
            const found = state.items.find(i => i.product.id === item.id);
            if(found) {
                found.quantity +=1;
            }
            else{
                state.items.push({product:item, quantity:1})
            }
            state.totalItems = state.items.reduce((total, i) => total + i.quantity, 0);
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        deleteFromCart(state,action){
            const id = action.payload;
            const item = state.items.find(i => i.product.id === id);
            if(item){
                state.items=state.items.filter(i => i.product.id !== id);
                state.totalItems -= item.quantity;
            }
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        increaseQuantity(state,action){
            const id = action.payload;
            const item = state.items.find(i => i.product.id === id);
            if(item){
                item.quantity += 1;
                state.totalItems +=1;
            }
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        decreaseQuantity(state,action){
            const id = action.payload;
            const item = state.items.find(i => i.product.id === id);
            if(item && item.quantity > 1){
                item.quantity -= 1;
                state.totalItems -=1;
            }
            localStorage.setItem('cart', JSON.stringify(state.items));
        }
    }
});

export const {addToCart,deleteFromCart,increaseQuantity,decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;