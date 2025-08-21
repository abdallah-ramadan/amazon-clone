import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductDetails = createAsyncThunk(
    "productDetails/fetchProductDetails",
    async (productId, { rejectWithValue }) => {
        try {
        const response = await axios.get(`https://dummyjson.com/products/${productId}`);
        return response.data;
        } catch (error) {
        return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: {
    product: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearProductDetails: (state) => {
      state.product = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearProductDetails } = productDetailsSlice.actions;
export default productDetailsSlice.reducer;
