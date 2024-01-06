import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../index'

type BasketState = {
	basket: Array<string>
}

const initialState: BasketState = {
	basket: [],
}

export const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {},
})

export const {} = basketSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default basketSlice.reducer
