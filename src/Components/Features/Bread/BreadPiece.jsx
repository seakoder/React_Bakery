import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    breadAvailable: 10
}

const breadPiece = createSlice({
    name: 'Bread',
    initialState: initialState,
    // multiple reducers can be assigned to the reducers property below
    reducers: {
        // reducers is an object with multiple functions
        // the function receives state and action as params,
        // direct state mutaion is possible with the help of redux toolkit
        BREAD_ORDER: (state, action) => {
            state.breadAvailable--
        },
        BREAD_RESTOCK: (state, action) => {
            state.breadAvailable += action.payload
        }

    }
})

export let breadActions = breadPiece.actions
export default breadPiece.reducer
// export const {BREAD_ORDER, BREAD_RESTOCK} = breadPiece.actions
