import React from 'react'

function CartItem({ item }) {
    return (
        <li className='cart-item'>
            <div>{item.name} : {item.quantity}</div>
            <div className='actions'>
                <button>-</button>
                <button>+</button>
            </div>
        </li>
    )
}

export default CartItem