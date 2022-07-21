import { createSlice } from '@reduxjs/toolkit'
import { PRODUCTS } from '../../shared/database'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    value: PRODUCTS,
  },
  reducers: {},
})

export const {} = productSlice.actions

export default productSlice.reducer
