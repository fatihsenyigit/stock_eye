

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    purchases: [],
    sales: [],
    firms: [],
    products: [],
    brands: [],
    categories: [],
    loading: false,
    error: false,
}

const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    fetchStart: (state) => {
        state.loading = true
    },

    fetchFail: (state) => {
        state.loading = false
        state.error = true
    },
  },
})

export const {fetchStart, fetchFail} = stockSlice.actions

export default stockSlice.reducer