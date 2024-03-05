import React from 'react'
import CartItem from './CartItem'

function Cart({ cart }) {
    return (
        <div className='cart'>

            <h1>Cart</h1>

            <ul>
                {cart.map(item => <CartItem key={item.id} item={item} />)}
            </ul>

            <hr style={{ width: "100%" }} />

            <div className='summary'>
                <h3>Total Items: 0</h3>
                <h3>Total Price: 0</h3>
            </div>

        </div>
    )
}

export default Cart