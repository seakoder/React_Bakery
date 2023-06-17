import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pizzaAvailable: 100
}
const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        PIZZA_ORDER: (state, action) => {
            state.pizzaAvailable--
        },
        PIZZA_RESTOCK: (state, action) => {
            state.pizzaAvailable += action.payload
        }
    }
})

export const pizzaActions = pizzaSlice.actions
export default pizzaSlice.reducer