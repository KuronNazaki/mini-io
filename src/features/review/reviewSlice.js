import { createSlice } from '@reduxjs/toolkit'
import { REVIEWS } from '../../shared/database'

export const reviewSlice = createSlice({
  name: 'review',
  initialState: {
    value: REVIEWS,
  },
  reducers: {},
})

export const {} = reviewSlice.actions

export default reviewSlice.reducer
