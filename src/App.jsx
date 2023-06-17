import React from 'react'
import './App.css'
import BreadUI from './Componenets/ReduxToolkit/Features/Bread/BreadUI'
import BurgerUI from './Componenets/ReduxToolkit/Features/Burger/BurgerUI'
import DrinkUI from './Componenets/ReduxToolkit/Features/Drink/DrinkUI'
import PizzaUI from './Componenets/ReduxToolkit/Features/Pizza/PizzaUI'

function App() {
  return (
    <>
      <BreadUI />
      <BurgerUI />
      <DrinkUI />
      <PizzaUI/>
    </>
  )
}
export default App
