import React from 'react'

function ProductCatalogItem({ product }) {


    return (
        <div className='product-catalog-item'>
            <div className='product-info'>
                <div>Name : {product.name}</div>
                <div>ID : {product.id}</div>
            </div>
            <button>Add To Cart</button>
        </div>
    )
}

export default ProductCatalogItem


/*

 {
        "id": "001",
        "name": "Whole Wheat Spaghetti",
        "description": "A nutritious, whole grain pasta made from whole wheat flour, providing a rich source of dietary fiber, protein, and vitamins.",
        "image_url": "https://images.openfoodfacts.org/images/products/807/680/952/9433/front_en.215.400.jpg",
        "price": 1.85
}

*/