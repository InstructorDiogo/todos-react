import React from 'react'
import ProductCatalogItem from './ProductCatalogItem'

function ProductCatalog({productsCatalog}) {
    return (
        <div className='product-catalog'>
            <h1>Available Products</h1>

            {productsCatalog.map(product => <ProductCatalogItem key={product.id} product={product} />)}
        </div>
    )
}

export default ProductCatalog