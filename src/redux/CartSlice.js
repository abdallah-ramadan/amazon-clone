import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  total: 0,
  amounts: 0
};

if(JSON.parse(localStorage.getItem("cart-products"))){
const cartProducts =JSON.parse(localStorage.getItem("cart-products"))
initialState.cartItems = cartProducts
for(let i =0;i< cartProducts.length; i++){
  initialState.amounts += cartProducts[i].quantity
  initialState.total += cartProducts[i].price * cartProducts[i].quantity
}
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, price, quantity} = action.payload;
    
      const existingIndex = state.cartItems.findIndex(
        item => item.id === id 
      );
    
      if (existingIndex >= 0) {
        state.cartItems[existingIndex].quantity += quantity;
        state.amounts += quantity
        localStorage.setItem("cart-products", JSON.stringify(state.cartItems))
      } else {
        state.cartItems.unshift({ ...action.payload, amount: 1 });
        state.amounts += quantity
        localStorage.setItem("cart-products", JSON.stringify(state.cartItems))
      }
      state.total += price;
    },
    
    decreaseAmount: (state, action) => {
      const { id, price } = action.payload;
    
      const index = state.cartItems.findIndex(
        item => item.id === id 
      );
    
      if (index !== -1) {
        if (state.cartItems[index].quantity > 1) {
          state.cartItems[index].quantity -= 1;
          localStorage.setItem("cart-products", JSON.stringify(state.cartItems))

          state.amounts -= 1
        } else {
          state.cartItems.splice(index, 1);
          localStorage.setItem("cart-products", JSON.stringify(state.cartItems))
          state.amounts -= 1
        }
        state.total -= price ;
      }
    },
removeFromCart: (state, action) => {
  const { id, price, quantity } = action.payload;
  const itemIndex = state.cartItems.findIndex(item => item.id === id);
  
  if (itemIndex !== -1) {
    state.cartItems.splice(itemIndex, 1);
    state.amounts -= quantity;
    state.total -= price * quantity;
    localStorage.setItem("cart-products", JSON.stringify(state.cartItems));
  }
},
    
    increaseAmount: (state, action) => {
      const { id, price } = action.payload;
    
      const index = state.cartItems.findIndex(
        item => item.id === id 
      );
    
      if (index !== -1) {
        state.cartItems[index].quantity += 1;
        localStorage.setItem("cart-products", JSON.stringify(state.cartItems))
        state.total += price;
        state.amounts += 1
      }
    },    
    clearCart: state => {
      state.cartItems = [];
      localStorage.setItem("cart-products", JSON.stringify(state.cartItems))
      state.total = 0
      state.amounts = 0
    }
  }
});

export const { addToCart, decreaseAmount, increaseAmount, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
