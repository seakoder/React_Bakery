import { configureStore } from '@reduxjs/toolkit'
import breadReducer from '../Features/Bread/BreadPiece'
import burgerReducer from '../Features/Burger/BurgerSlice'
import drinkReducer from '../Features/Drink/DrinkSlice'
import test from '../Features/Pizza/PizzaSlice'

const store = configureStore({
    reducer: {
        bread: breadReducer,
        burger: burgerReducer,
        drink: drinkReducer,
        pizza: test,
    }
})

export default store