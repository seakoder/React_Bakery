import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { drinkActions } from './DrinkSlice'

function DrinkUI() {
const dispatch = useDispatch()
const drinkAvail = useSelector(state=> state.drink.drinkAvailable)

  return (
    <>
      <h2>Drinks Available are {drinkAvail}</h2>
      <button onClick={()=>dispatch(drinkActions.DRINK_ORDER())}>Order a drink</button>
      <button onClick={()=>dispatch(drinkActions.DRINK_RESTOCK(10))}>Restock the drinks</button>
</>
  )
}

export default DrinkUI
