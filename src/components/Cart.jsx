import React from 'react'
import CartItem from './CartItem'

function Cart({ cart, IncreaseQuantity, DecreaseQuantity }) {
    return (
        <div className='cart'>

            <h1>Cart</h1>

            <ul>
                {cart.map(product => <CartItem key={product.id} product={product} IncreaseQuantity={IncreaseQuantity} DecreaseQuantity={DecreaseQuantity} />)}
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