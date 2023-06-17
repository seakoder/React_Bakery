import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    drinkAvailable: 50
}
const drinkSlice = createSlice({
    name: 'drink',
    initialState,
    reducers: {
        DRINK_ORDER: (state, action)=> {
            state.drinkAvailable--
        },
        DRINK_RESTOCK: (state, action)=>{
state.drinkAvailable +=action.payload
        }
    }
})
export const drinkActions = drinkSlice.actions;
export default drinkSlice.reducer;