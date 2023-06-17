import React from 'react'
import { burgerActions } from './BurgerSlice'
import { useDispatch, useSelector } from 'react-redux'
import { drinkActions } from '../Drink/DrinkSlice'

function BurgerUI() {
  const burgerAvail = useSelector(state => state.burger.burgerAvailable)
  let dispatch = useDispatch()
  return (
    <div>
      <h2>Burgers available are {burgerAvail}</h2>
      <p style={{color: 'orange'}}>You get a drink free, when you order a burger</p>
      <button onClick={()=>{dispatch(burgerActions.BURGER_ORDER()); dispatch(drinkActions.DRINK_ORDER())}}>Order a burger</button>
      <button onClick={()=>dispatch(burgerActions.BURGER_RESTOCK(10))}>Restock the burgers</button>
    </div>
  )
}

export default BurgerUI
