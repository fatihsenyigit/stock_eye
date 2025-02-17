import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  purchases: [],
  sales: [],
  firms: [],
  products: [],
  brands: [],
  categories: [],
  loading: false,
  error: false,
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false
    },

    // getFirmsSuccess: (state, { payload }) => {
    //   state.loading = false;
    //   state.firms = payload;
    // },

    // getSalesSuccess: (state, { payload }) => {
    //   state.loading = false;
    //   state.sales = payload;
    // },

    // getStockSuccess: (state, action) => {
    //   state.loading = false;
    //   state[action.payload.path] = action.payload.stockData;
    // },

    getStockSuccess: (state, {payload: {path, stockData}}) => {
      state.loading = false;
      state[path] = stockData;
      // state.error = false;
    },

    getFourRequestSuccess: (state, {payload}) => {
      state.loading = false
      state.products= payload?.products
      state.purchases= payload?.purchases
      state.brands= payload?.brands
      state.firms= payload?.firms
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;

    },
  },
});

export const { fetchStart, fetchFail, getStockSuccess, getFourRequestSuccess } = stockSlice.actions;

export default stockSlice.reducer;
