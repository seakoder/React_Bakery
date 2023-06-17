import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    burgerAvailable: 20
}

const burgerSlice = createSlice({
    name: 'burger',
    initialState: initialState,
    reducers: {
        BURGER_ORDER: (state, action) => {
            state.burgerAvailable--
        },
        BURGER_RESTOCK: (state, action) => {
            state.burgerAvailable += action.payload;
        }
    }
})

export let burgerActions = burgerSlice.actions;
// export const BURGER_RESTOCK = burgerSlice.BURGER_RESTOCK
export default burgerSlice.reducer