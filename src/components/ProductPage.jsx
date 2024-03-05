import React from 'react'

function ProductPage({ AddProductToCart, products }) {

    return (
        <div className='product-catalog'>
            <h1>Available Products</h1>

            {products.map(product =>
                <div key={product.id} className='product-catalog-item'>
                    <div className='product-info'>
                        <div>Name : {product.name}</div>
                        <div>ID : {product.id}</div>
                        <div>{product.description}</div>
                        <img src={product.image_url} />
                    </div>
                    <button onClick={() => AddProductToCart(product)}>Add To Cart</button>
                </div>
            )}
        </div>
    )
}

export default ProductPage