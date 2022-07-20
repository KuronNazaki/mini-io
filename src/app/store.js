import { configureStore } from '@reduxjs/toolkit'
import productSlice from '../features/product/productSlice'
import reviewSlice from '../features/review/reviewSlice'

export default configureStore({
  reducer: {
    product: productSlice,
    review: reviewSlice,
  },
})
