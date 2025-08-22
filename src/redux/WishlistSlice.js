import { createSlice } from "@reduxjs/toolkit";

// Load wishlist from localStorage if it exists
const getInitialWishlist = () => {
  if (typeof window !== "undefined") {
    const storedWishlist = localStorage.getItem("wishlist-products");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  }
  return [];
};

const initialState = {
  wishlistItems: getInitialWishlist(),
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const { id } = action.payload;
      
      // Check if item already exists in wishlist
      const existingIndex = state.wishlistItems.findIndex(
        item => item.id === id
      );
      
      if (existingIndex === -1) {
        // Add to wishlist if not already there
        state.wishlistItems.unshift({ ...action.payload });
        localStorage.setItem("wishlist-products", JSON.stringify(state.wishlistItems));
      }
    },
    
    removeFromWishlist: (state, action) => {
      const { id } = action.payload;
      
      state.wishlistItems = state.wishlistItems.filter(
        item => item.id !== id
      );
      
      localStorage.setItem("wishlist-products", JSON.stringify(state.wishlistItems));
    },
    
    moveToCart: (state, action) => {
      const { id } = action.payload;
      
      // Find the item in wishlist
      const itemIndex = state.wishlistItems.findIndex(
        item => item.id === id
      );
      
      if (itemIndex !== -1) {
        // Remove from wishlist
        state.wishlistItems.splice(itemIndex, 1);
        localStorage.setItem("wishlist-products", JSON.stringify(state.wishlistItems));
      }
    },
    
    clearWishlist: state => {
      state.wishlistItems = [];
      localStorage.setItem("wishlist-products", JSON.stringify(state.wishlistItems));
    }
  }
});

export const { addToWishlist, removeFromWishlist, moveToCart, clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;