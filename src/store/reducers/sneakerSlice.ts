import { createSlice } from '@reduxjs/toolkit'

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

export default sneakerSlice.reducer
