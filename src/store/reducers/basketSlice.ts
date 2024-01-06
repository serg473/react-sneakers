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

export default basketSlice.reducer
