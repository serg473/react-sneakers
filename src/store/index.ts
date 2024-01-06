import { configureStore } from '@reduxjs/toolkit'
import basketSlice from './reducers/basketSlice'
import sneakerSlice from './reducers/sneakerSlice'

export const store = configureStore({
	reducer: {
		sneaker: sneakerSlice,
		basket: basketSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
