import React from 'react'

function CartItem({ product, IncreaseQuantity, DecreaseQuantity }) {
    return (
        <li className='cart-item'>
            <div>{product.name} : {product.quantity}</div>
            <div className='actions'>
                <button onClick={() => DecreaseQuantity(product)}>-</button>
                <button onClick={() => IncreaseQuantity(product)}>+</button>
            </div>
        </li>
    )
}

export default CartItem