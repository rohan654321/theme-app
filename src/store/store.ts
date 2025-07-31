import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "./themeSlice"
import productsReducer from "./productsSlice"

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    products: productsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
