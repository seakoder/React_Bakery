import React from 'react'
import { breadActions } from './BreadPiece'
import { useSelector, useDispatch } from 'react-redux'

function BreadUI() {

    const breadAvail = useSelector(state => state.bread.breadAvailable)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Breads Available are {breadAvail}</h2>
            <button onClick={() => dispatch(breadActions.BREAD_ORDER())}>Order Bread</button>
            <button onClick={() => dispatch(breadActions.BREAD_RESTOCK(11))}>Restock Bread</button>

        </div>
    )
}

export default BreadUI
