
import { useState } from 'react'
import productsCatalog from './assets/products.json'
import ProductPage from './components/ProductPage'
import Cart from './components/Cart'

function App() {

  const [products, setProducts] = useState(productsCatalog)
  const [cart, setCart] = useState([
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
  ])

  function filterProductsByName(e) {

    const searchWord = e.target.value

    if (searchWord) {
      // get a filtered products array by what's in the search bar
      const filteredProducts = products.filter(product => product.name.includes(searchWord))

      setProducts(filteredProducts)
    }
    else {
      setProducts(productsCatalog)
    }

  }

  function filterProductsByStock(e){
    // get e.target.checked instead of e.target.value
  }

  function AddProductToCart(product) {
    // Generate a copy of the array
    const newCart = [...cart]

    // Do nothing if the product exists
    const id = product.id
    const foundProduct = newCart.find(cartProduct => cartProduct.id === id)
    if (foundProduct) {
      return
    }

    // Add the new Product with quantity 1
    newCart.push({ quantity: 1, ...product })

    // Set the Cart
    setCart(newCart)
  }

  function IncreaseQuantity(product) {
    // Generate a copy of the array
    const newCart = [...cart]

    newCart.forEach(cartProduct => {

      if (cartProduct.id === product.id) {
        cartProduct.quantity++
      }

    })

    // Set the Cart
    setCart(newCart)
  }

  function DecreaseQuantity(product) {
    console.log("DecreaseQuantity")
    // Decrease Quantity by 1 to an item
    // If quantity is 0 after decreasing, remove the item from the cart array
  }

  return (
    <main className={`product-page`}>

      <div className='controls'>
        Search for Products:
        <input onChange={filterProductsByName} />

        <hr />
        Show In Stock Products:
        <input type="checkbox" onChange={filterProductsByName}/>
      </div>

      <div className='product-display'>
        <ProductPage AddProductToCart={AddProductToCart} products={products} />
        <Cart IncreaseQuantity={IncreaseQuantity} DecreaseQuantity={DecreaseQuantity} cart={cart} />
      </div>

    </main>
  )
}

export default App