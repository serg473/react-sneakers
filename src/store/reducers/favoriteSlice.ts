import { createSlice } from '@reduxjs/toolkit'

type BasketState = {
	favoritesData: Array<string>
}

const initialState: BasketState = {
	favoritesData: [],
}

export const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {},
})

export const {} = basketSlice.actions
export default basketSlice.reducer
