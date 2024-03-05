import React from 'react'

function Cart({ cart, IncreaseQuantity, DecreaseQuantity }) {
    return (
        <div className='cart'>

            <h1>Cart</h1>

            <ul>
                {cart.map(product =>
                    <li key={product.id} className='cart-item'>
                        <div>{product.name} : {product.quantity}</div>
                        <div className='actions'>
                            <button onClick={() => DecreaseQuantity(product)}>-</button>
                            <button onClick={() => IncreaseQuantity(product)}>+</button>
                        </div>
                    </li>
                )}
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