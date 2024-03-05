
import { useState } from 'react'
import productsCatalog from './assets/products.json'
import ProductCatalog from './components/ProductCatalog'
import Cart from './components/Cart'

function App() {

  const [cart, setCart] = useState([
    {
      id: "002",
      name: "Cheddar Cheese",
      description: "Aged cheddar cheese known for its deep, tangy flavor and smooth texture, perfect for melting over dishes or enjoying as part of a cheese platter.",
      image_url: "https://images.openfoodfacts.org/images/products/500/029/514/2893/front_en.13.400.jpg",
      price: 3.40,
      quantity: 1
    }
  ])

  function AddProductToCart(product) {
    console.log("AddProductToCart")
    // will change the cart state
  }
  
  function IncreaseQuantity(product) {
    console.log("IncreaseQuantity")
    // Add Quantity by 1 to an item
  }
  
  function DecreaseQuantity(product) {
    console.log("DecreaseQuantity")
    // Decrease Quantity by 1 to an item
    // If quantity is 0 after decreasing, remove the item from the cart array
  }

  return (
    <main className={`product-page`}>

      <ProductCatalog AddProductToCart={AddProductToCart} productsCatalog={productsCatalog} />
      <Cart IncreaseQuantity={IncreaseQuantity} DecreaseQuantity={DecreaseQuantity} cart={cart} />

    </main>
  )
}

export default App


/*

  We are going to design a Product Catalog + Cart Page with 2 sections:
    - The Product Catalog Component, which contains information for each product
    
    - The Cart Component, which contains:
      - how many of the product I want, total products, total price
      - AddProduct(), IncreaseQuantity(), DecreaseQuantity()

*/


// After adding a product to the cart, the cart should look like this:
const cartWithOneItem = [
  {
    id: "002",
    name: "Cheddar Cheese",
    description: "Aged cheddar cheese known for its deep, tangy flavor and smooth texture, perfect for melting over dishes or enjoying as part of a cheese platter.",
    image_url: "https://images.openfoodfacts.org/images/products/500/029/514/2893/front_en.13.400.jpg",
    price: 3.40,
    quantity: 1
  }
]

// A cart with several items will look like this
const cartWithSeveralItems = [
  {
    id: "003",
    name: "Gala Apples",
    description: "Sweet, crisp, and juicy apples with a vibrant red and yellow skin, ideal for snacking, baking, or making apple sauce.",
    image_url: "https://images.openfoodfacts.org/images/products/405/648/918/6328/front_de.14.400.jpg",
    price: 2.40,
    quantity: 10
  },
  {
    id: "002",
    name: "Cheddar Cheese",
    description: "Aged cheddar cheese known for its deep, tangy flavor and smooth texture, perfect for melting over dishes or enjoying as part of a cheese platter.",
    image_url: "https://images.openfoodfacts.org/images/products/500/029/514/2893/front_en.13.400.jpg",
    price: 3.40,
    quantity: 3
  }
]



