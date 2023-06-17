import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { pizzaActions } from './PizzaSlice'
function PizzaUI() {

const dispatch = useDispatch()
const pizzaAvail = useSelector(state=> state.pizza.pizzaAvailable)

  return (
    <div>
        <h2>Pizza available are {pizzaAvail}</h2>
<button onClick={()=> dispatch(pizzaActions.PIZZA_ORDER())}>Order Pizza</button>
<button onClick={()=> dispatch(pizzaActions.PIZZA_RESTOCK(10))}>Restock Pizza</button>
    </div>
  )
}

export default PizzaUI
