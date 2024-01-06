import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../index'

type BasketState = {
	sneakersData: Array<string>
}

const initialState: BasketState = {
	sneakersData: [],
}

export const sneakerSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {},
})

export const {} = sneakerSlice.actions

export const selectCount = (state: RootState) => state.counter.value

export default sneakerSlice.reducer
